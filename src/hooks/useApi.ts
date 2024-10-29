import { useState, useEffect } from "react";
import { apiClient } from "@/lib/apiClient";

interface UseApiOptions<TRequest> {
  url: string;
  body?: TRequest;
  headers?: Record<string, string>;
}

interface UseApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useApi<TResponse, TRequest = unknown>({
  url,
  body,
  headers,
}: UseApiOptions<TRequest>): UseApiResponse<TResponse> {
  const [data, setData] = useState<TResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient<TResponse, TRequest>({
          url,
          body,
          headers,
        });
        setData(response);
        setError(null);
      } catch (err: unknown) {
        setError((err as Error).message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, body, headers]);

  return { data, loading, error };
}
