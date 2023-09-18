import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || '';

export const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
