export const baseUrl = 'https://chytozavrik-backend.vercel.app/api/v1';

export const signInService = async (email: string, password: string) => {
  const result = await fetch(`${baseUrl}/auth/token/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  console.log('Fetch', result.status, result.statusText, result.ok);

  // if (!result.ok) {
  //   throw new Error('Failed to fetch signin');
  // }

  return await result.json();
};
