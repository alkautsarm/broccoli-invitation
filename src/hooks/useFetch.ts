import { useState } from 'react';

interface IUseFetchProps {
  method?: string;
  url: string;
  onSuccess?: () => void;
  onError?: () => void;
}

const useFetch = <Req, Res>({
  method = 'GET',
  url,
  onSuccess,
  onError,
}: IUseFetchProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Res | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (body?: Req) => {
    try {
      setIsLoading(true);

      const response = await fetch(url, {
        method,
        body: JSON.stringify(body || {}),
      });
      const reponseJson = await response.json();

      if (response.ok) {
        setData(reponseJson as Res);
        onSuccess?.();
      } else {
        throw new Error(reponseJson.errorMessage);
      }
    } catch (err: unknown) {
      setError(err as Error);
      onError?.();
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setData(null);
    setError(null);
  };

  return { isLoading, data, error, fetchData, reset };
};

export default useFetch;
