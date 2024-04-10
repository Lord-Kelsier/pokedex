import React, { createContext } from 'react';

export interface PageData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<any>;
}

interface PokemonData {
  id: number;
}

type PageContextType = {
  pageData: PageData | null;
  setPageData: React.Dispatch<React.SetStateAction<PageData | null>>;
  pokemonData: PokemonData;
};

export const defaultPaginationContext = {
  pageData: null,
  setPageData: () => {},
  pokemonData: {
    id: 132, //Ditto id
  },
};
export const PaginationContext = createContext<PageContextType>(defaultPaginationContext);
