import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import { PaginationContext } from './paginationContext';
import PokemonInfo from './PokemonInfo/PokemonInfo';

export default function Routing() {
  const [pageData, setPageData] = useState([]);
  return (
    <BrowserRouter>
      <PaginationContext.Provider value={{ pageData, setPageData }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pokemon/:pokeName" element={<PokemonInfo />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </PaginationContext.Provider>
    </BrowserRouter>
  );
}
