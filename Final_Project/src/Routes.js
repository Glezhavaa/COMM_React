import { Route, Routes } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/routes";
import { NotFound } from "./page";

function RoutesLib() {
  return (
    <Routes>
      {ROUTES_CONFIG.map((route) => {
        const Guard = route.guard;
        const Page = route.page;
        return (
          <Route
            key={Guard}
            path={route.path}
            element={
              <Guard>
                <Page />
              </Guard>
            }
          />
        );
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesLib;
