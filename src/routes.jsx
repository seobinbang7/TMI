import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const RootLayout = lazy(() => import("./layout/RootLayout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

export default router;
