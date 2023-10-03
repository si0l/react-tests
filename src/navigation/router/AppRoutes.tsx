import { Route, Routes } from "react-router";
import App from "../../App";
import { RoutePath } from "./RoutePath";
import { routerItems } from "./routerItems";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<App />}>
        {routerItems.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
