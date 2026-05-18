import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Service from "../pages/Service/Service";
import AboutUs from "../pages/About/About";
import ConnectUS from "../pages/About/section/ConnectUS/ConnectUS";

// Reset scroll on every route change — React Router preserves scroll by default.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ConnectUS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;