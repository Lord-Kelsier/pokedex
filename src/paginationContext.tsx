import React, { createContext } from 'react';

export interface PageData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<any>;
}

type PageContextType = {
  pageData: PageData | null;
  setPageData: React.Dispatch<React.SetStateAction<PageData | null>>;
};

const defaultContext = {
  pageData: null,
  setPageData: () => {},
};
export const PaginationContext = createContext<PageContextType>(defaultContext);
