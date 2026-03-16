import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';

export async function getSession() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('authToken')?.value;
  const userInfoCookie = cookieStore.get('userInfo')?.value;

  if (!authToken) {
    return null;
  }

  try {
    // Basic structural validation - real validation should ideally occur on the API backend 
    // or using a proper JOSE library if absolute secret verification is required edge-side,
    // but jwt-decode provides immediate access to the signed claims for UI rendering.
    const decodedToken: any = jwtDecode(authToken);
    const isExpired = decodedToken.exp * 1000 < Date.now();

    if (isExpired) {
      return null;
    }

    let user: any = null;
    if (userInfoCookie) {
      try {
        const parsedInfo = JSON.parse(decodeURIComponent(userInfoCookie));
        user = {
          id: decodedToken.sub || parsedInfo.id,
          firstName: parsedInfo.firstName,
          lastName: parsedInfo.lastName,
          email: decodedToken.email || parsedInfo.email,
          avatar: parsedInfo.avatar,
        };
      } catch (e) {
        console.error('Error parsing userInfo cookie', e);
      }
    }

    // Fallback if userInfoCookie is missing or doesn't have the avatar
    if (!user || !user.avatar) {
      try {
        const { getUserProfileFromAccounts } = await import('./auth');
        const profile = await getUserProfileFromAccounts(authToken);
        if (profile) {
          user = {
            id: profile.id || decodedToken.sub,
            email: profile.email || decodedToken.email,
            firstName: profile.firstName || decodedToken.firstName || "User",
            lastName: profile.lastName || decodedToken.lastName || "",
            avatar: profile.avatar || profile.avatarUrl || null,
          };
        } else if (!user) {
           user = {
              id: decodedToken.sub,
              email: decodedToken.email,
              firstName: decodedToken.firstName || "User",
              lastName: decodedToken.lastName || "",
              avatar: null
           };
        }
      } catch (e) {
         if (!user) {
             user = {
                id: decodedToken.sub,
                email: decodedToken.email,
                firstName: decodedToken.firstName || "User",
                lastName: decodedToken.lastName || "",
                avatar: null
             };
         }
      }
    }

    if (user && user.id) {
      try {
        const { query } = await import('@/app/lib/db');
        const res = await query('SELECT custom_avatar_path, use_custom_avatar, public_name FROM reox_users WHERE user_id = $1', [user.id]);
        if (res.rows.length > 0) {
          const row = res.rows[0];
          if (row.public_name) {
            user.publicName = row.public_name;
          }
          if (row.use_custom_avatar && row.custom_avatar_path) {
            const kcd3PublicUrl = process.env.KCD3_PUBLIC_URL || 'http://localhost:5662';
            user.avatar = `${kcd3PublicUrl}${row.custom_avatar_path}`;
          }
        }
      } catch (dbErr) {
        console.error("Local DB check failed for custom avatar:", dbErr);
      }
    }

    return user;
  } catch (error) {
    console.error("Error decoding auth token:", error);
    return null;
  }
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  return cookieStore.get('authToken')?.value;
}
