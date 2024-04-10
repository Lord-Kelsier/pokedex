import { useContext, useEffect, useState } from 'react';

import { PaginationContext } from '../shared/contexts/paginationContext';
import { parseFetch } from './parseFetch';

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    parseFetch(url).then((data) => setData(data));
  }, []);
  return { data, setData };
}

export function useFetchWithPaginationContext(url: string) {
  const { pageData, setPageData } = useContext(PaginationContext);
  useEffect(() => {
    if (pageData !== null) return;
    parseFetch(url).then((data) => {
      setPageData(data);
    });
  }, []);
  return;
}
