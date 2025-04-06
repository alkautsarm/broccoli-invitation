import { useState } from 'react';

interface IUseFetchProps {
  method?: string;
  url: string;
}

const useFetch = <Req, Res>({ method = 'GET', url }: IUseFetchProps) => {
  const [isLoading, seIstLoading] = useState(false);
  const [data, setData] = useState<Res | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (body?: Req) => {
    try {
      seIstLoading(true);

      const response = await fetch(url, {
        method,
        body: JSON.stringify(body || {}),
      });
      const reponseJson = await response.json();

      setData(reponseJson as Res);
    } catch (err: unknown) {
      setError(err as Error);
    } finally {
      seIstLoading(false);
    }
  };

  return { isLoading, data, error, fetchData };
};

export default useFetch;
