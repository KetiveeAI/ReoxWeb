import { NextResponse } from 'next/server';
import { getSession } from '@/app/lib/session';

export async function GET() {
  const session = await getSession();
  
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ 
    authenticated: true,
    user: session 
  });
}

export async function POST() {
  // Logout route convenience: clear the global SSO cookies
  const response = NextResponse.json({ success: true });
  response.cookies.delete('authToken');
  response.cookies.delete('userInfo');
  return response;
}
