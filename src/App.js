import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import LandingPage from "./LandingPage/LandingPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories/:category" element={<CategoriesPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
