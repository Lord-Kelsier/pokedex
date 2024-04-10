import { useEffect, useState } from 'react';

import { parseFetch } from './parseFetch';

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    parseFetch(url).then((data) => setData(data));
  }, []);
  return { data, setData };
}
