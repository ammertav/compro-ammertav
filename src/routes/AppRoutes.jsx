import { useEffect, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

// Secondary pages are code-split: their JS only downloads when the route is
// visited, keeping the initial (Home) bundle small. Home stays eager since it
// is the primary landing page.
const Product = lazy(() => import("../pages/Product/Product"));
const Service = lazy(() => import("../pages/Service/Service"));
const AboutUs = lazy(() => import("../pages/About/About"));
const ConnectUS = lazy(() => import("../pages/About/section/ConnectUS/ConnectUS"));

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