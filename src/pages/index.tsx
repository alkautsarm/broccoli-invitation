import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import Home from './Home';

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
