export async function getAuthServiceUrl() {
  return process.env.AUTH_SERVICE_URL || 'http://localhost:5689'; // Defaulting to the existing .env value
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  section: string;
}

export async function exchangeCodeForToken(code: string, redirectUri: string): Promise<TokenResponse> {
  const authUrl = await getAuthServiceUrl();
  const res = await fetch(`${authUrl}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: process.env.KETIVEE_OAUTH_CLIENT_ID || 'ketivee-reoxweb',
      client_secret: process.env.KETIVEE_OAUTH_CLIENT_SECRET || 'secret-for-dev',
      redirect_uri: redirectUri,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to exchange token: ${res.status} ${text}`);
  }
  return res.json();
}

export async function getUserProfile(accessToken: string): Promise<UserProfile> {
  const authUrl = await getAuthServiceUrl();
  const res = await fetch(`${authUrl}/oauth/userinfo`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to get user profile: ${res.status} ${text}`);
  }
  return res.json();
}

export async function getUserProfileFromAccounts(accessToken: string) {
  const accountsUrl = process.env.ACCOUNTS_SERVICE_URL || 'http://localhost:8956';
  const res = await fetch(`${accountsUrl}/api/auth/profile`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    console.error('Failed to get from Accounts API:', await res.text());
    return null;
  }
  
  const data = await res.json();
  if (data.success && data.profile) {
    return data.profile;
  }
  return null;
}
