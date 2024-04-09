import { useState, useEffect } from 'react';

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return { data };
}
