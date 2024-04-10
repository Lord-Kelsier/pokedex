import { useState } from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import { PaginationContext, PageData } from './paginationContext';
import PokemonInfo from './PokemonInfo/PokemonInfo';

const router = createBrowserRouter([{ path: '*', Component: Root }]);

export default function Routing() {
  return <RouterProvider router={router} />;
}
function Root() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  return (
    <PaginationContext.Provider value={{ pageData, setPageData }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokemon/:pokeName" element={<PokemonInfo />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </PaginationContext.Provider>
  );
}
