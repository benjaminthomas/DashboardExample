import { Suspense, lazy, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import routes from "./index";
import LandingPage from "../pages/LandingPage";
import Loader from "../loader/loader";
import DefaultLayout from "../layouts/defaultLayout";

const DashboardLayout = lazy(() => import("../layouts/dashboardLayout"));

export default function RoutePath() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      navigate("/dashboard/metrics", { replace: true });
    }
    setTimeout(() => setLoading(false), 1000);
  }, [navigate]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}
