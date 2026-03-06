import { cookies } from 'next/headers';

export async function getSession() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('reox_user');
  
  if (!userCookie) {
    return null;
  }

  try {
    return JSON.parse(userCookie.value);
  } catch (e) {
    return null;
  }
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  return cookieStore.get('access_token')?.value;
}
