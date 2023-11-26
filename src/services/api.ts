import { getServerSession } from 'next-auth';
import { authOptions } from '@/config';
import { AnswerType, FetchResponseType, QuizType, TokenType, UserType, sendPasswordResetEmailType, resetPasswordType } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const token: { access: string | null; refresh: string | null } = {
  access: null,
  refresh: null,
};

export const privateFetch = async (
  input: RequestInfo | URL,
  options: RequestInit | undefined = undefined
) => {
  const sesstion = await getServerSession(authOptions);

  return await fetch(input, {
    headers: {
      Authorization: 'Bearer ' + sesstion?.user.token.access,
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

export const getQuizByIdService = async (id: number): Promise<FetchResponseType<QuizType>> => {
  const result = await privateFetch(`${baseUrl}/quizzes/${id}`);

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



export const sendPasswordResetEmailService = async (email: string): Promise<FetchResponseType<sendPasswordResetEmailType>> => {
  const result = await fetch(`${baseUrl}/users/password/reset/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return await result.json();
};

export const newPasswordService = async (  new_password1: string,
  new_password2: string,
  uid: string,
  token: string): Promise<FetchResponseType<resetPasswordType>> => {
  const result = await fetch(`${baseUrl}/users/password/reset/confirm/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      new_password1,
      new_password2,
      uid,
      token,
    }),
  });

  return await result.json();
};

