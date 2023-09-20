import { getServerSession } from 'next-auth';
import { FetchResponseType } from '@/types';
import axios, { AxiosError, Method } from 'axios';
import { authOptions } from '@/config';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

// Axios instanse for client components
export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios instanse for server components
const axiosServer = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosServer.interceptors.request.use(
  async config => {
    const session = await getServerSession(authOptions);

    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${session?.user?.token.access}`;
    }

    return config;
  },
  error => Promise.reject(error)
);

export async function fetch<T, B = undefined>(
  url: string,
  method: Method = 'GET',
  data?: B
): Promise<FetchResponseType<T>> {
  try {
    const { data: result } = await axiosServer.request<FetchResponseType<T>>({
      url,
      method,
      data,
    });

    return result;
  } catch (error) {
    return {
      status: 'fail',
      data: {
        message:
          error instanceof AxiosError && error.response?.status !== 404
            ? error.response?.data.data.message
            : (error as Error).message,
      },
    };
  }
}
