import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`,
  },
});

interface ApiClientOptions<TRequest> {
  url: string;
  body?: TRequest;
  headers?: AxiosRequestConfig["headers"];
}

export async function apiClient<TResponse, TRequest = unknown>({
  url,
  body,
  headers,
}: ApiClientOptions<TRequest>): Promise<TResponse> {
  const response = await api.request<TResponse>({
    url,
    method: "GET",
    data: body,
    headers, // Optional headers that will merge with the default Authorization
  });
  return response.data;
}
