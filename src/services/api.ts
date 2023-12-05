import { getServerSession } from 'next-auth';
import { authOptions } from '@/config';
import {
  AnswerType,
  FetchResponseType,
  QuizInfoResponse,
  AllQuizzesResponse,
  TokenType,
  UserType,
  UsersQuizzesResponse,
  QuizCategory,
} from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const token: { access: string | null; refresh: string | null } = {
  access: null,
  refresh: null,
};

export const refreshTokenService = async (refreshToken: string) => {
  try {
    const response = await fetch(`${baseUrl}/auth/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });
    if (!response.ok) {
      throw new Error(`Refresh token error: ${response.status}`);
    }
    const data = await response.json();
    token.access = data.access;
    token.refresh = refreshToken; // assuming the refresh token remains the same
    return data;
  } catch (error) {
    console.error('Error in refreshTokenService:', error);
    throw error;
  }
};

export const privateFetch = async (
  input: RequestInfo | URL,
  options: RequestInit | undefined = undefined
) => {
  const session = await getServerSession(authOptions);

  return await fetch(input, {
    headers: {
      Authorization: 'Bearer ' + session?.user.token.access,
    },
    ...options,
  });
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

export const signUpService = async (
  email: string,
  password: string,
  confirmPassword: string
): Promise<FetchResponseType<UserType>> => {
  const result = await fetch(`${baseUrl}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      password2: confirmPassword,
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

export const getChildrenService = async () => {
  const result = await privateFetch(`${baseUrl}/users/me/children/`);

  return await result.json();
};

export const getQuizInfoByIdService = async (
  id: number
): Promise<FetchResponseType<QuizInfoResponse>> => {
  const result = await privateFetch(`${baseUrl}/quizzes/${id}`);

  return await result.json();
};

export const getQuizzesService = async (
  search: string = '',
  page: string = '1',
  page_size: number
): Promise<FetchResponseType<AllQuizzesResponse>> => {
  const result = await privateFetch(
    `${baseUrl}/quizzes/?search=${search}&page=${page}&page_size=${page_size}`
  );

  return await result.json();
};

export const getUsersQuizzesService = async (
  search: string = '',
  page: string = '1',
  category: QuizCategory = QuizCategory.All,
  is_reversed: boolean = true,
  page_size: number = 12,
  childId: string
): Promise<FetchResponseType<UsersQuizzesResponse>> => {
  const selectedCategory = category ? `&${category}` : '';

  const result = await privateFetch(
    `${baseUrl}/users/me/children/${childId}/quizzes/?page=${page}&page_size=${page_size}&reverse=${is_reversed}&search=${search}${selectedCategory}`
  );
  return await result.json();
};

export const sendSelectedAnswerService = async (
  childId: number,
  questionId: number,
  answerId: number
): Promise<FetchResponseType<AnswerType>> => {
  const result = await fetch(`${baseUrl}/questions/${questionId}/submit-answer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access,
    },
    body: JSON.stringify({
      child_id: childId,
      answer_id: answerId,
    }),
  });

  return await result.json();
};
