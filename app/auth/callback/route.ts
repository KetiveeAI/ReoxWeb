import { NextResponse } from 'next/server';
import { exchangeCodeForToken, getUserProfile } from '@/app/lib/auth';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL(`/community?error=${error}`, request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/community?error=no_code', request.url));
  }

  try {
    const redirectUri = `${url.origin}/auth/callback`;
    const tokens = await exchangeCodeForToken(code, redirectUri);
    const user = await getUserProfile(tokens.access_token);

    const cookieStore = await cookies();
    
    cookieStore.set('access_token', tokens.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokens.expires_in || 3600,
      path: '/',
    });
    
    if (tokens.refresh_token) {
      cookieStore.set('refresh_token', tokens.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    }

    // Store minimal user info encoded in a generic cookie for frontend display
    cookieStore.set('reox_user', JSON.stringify({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`.trim(),
      avatar: user.avatar || user.firstName[0],
      email: user.email,
    }), {
      httpOnly: false, // Accessible by frontend JS for display
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokens.expires_in || 3600,
      path: '/',
    });

    return NextResponse.redirect(new URL('/community', request.url));
  } catch (err) {
    console.error('Auth callback failed:', err);
    return NextResponse.redirect(new URL('/community?error=auth_failed', request.url));
  }
}
