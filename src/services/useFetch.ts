import { useEffect, useState, useContext } from 'react';

import { parseFetch } from './parseFetch';
import { PaginationContext } from '../paginationContext';

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
