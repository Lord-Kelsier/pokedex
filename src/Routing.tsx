import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage';
import PokemonInfo from './PokemonInfo/PokemonInfo';
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pokemon/:pokeName" element={<PokemonInfo />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
