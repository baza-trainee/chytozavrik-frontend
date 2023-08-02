import { FetchResponseType, TokenType, UserType } from '@/types';

const baseUrl = 'https://chytozavrik-backend.vercel.app/api/v1';

export const token: { access: string | null; refresh: string | null } = {
  access: null,
  refresh: null,
};

export const signInService = async (
  email: string,
  password: string
): Promise<FetchResponseType<TokenType>> => {
  const result = await fetch(`${baseUrl}/auth/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return await result.json();
};

export const getUserInfoService = async (): Promise<FetchResponseType<UserType>> => {
  const result = await fetch(`${baseUrl}/users/me/`, {
    headers: {
      Authorization: 'Bearer ' + token.access,
    },
  });

  return await result.json();
};

export const privateFetch = async (input: RequestInfo | URL, options: RequestInit | undefined) => {
  return await fetch(input, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
};
