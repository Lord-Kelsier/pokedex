import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
