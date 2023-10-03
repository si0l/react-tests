import ErrorBoundaryRenderExample from "../../pages/errorBoundaryExamples/ErrorBoundaryExample/ErrorBoundaryRenderExample";
import ErrorBoundaryExample from "../../pages/errorBoundaryExamples/ErrorBoundaryExample/ErrorBoundaryExample";
import { ReactQueryExample } from "../../pages/reactQueryExampes/ReactQueryExample/ReactQueryExample";
import DynamicColor from "../../pages/tailwindExamples/DynamicColor/DynamicColor";
import GroupPeer from "../../pages/tailwindExamples/GroupPeer/GroupPeer";
import ResponsiveGridLayout from "../../pages/tailwindExamples/ResponsiveGridLayout/ResponsiveGrid";
import ReusableThemeStyle from "../../pages/tailwindExamples/ReusableThemStyle/ReusableThemeStyle";
import TailwindMerge from "../../pages/tailwindExamples/TailwindMerge/TailwindMerge";
import Transition from "../../pages/tailwindExamples/Transition/Transition";
import { RoutePath } from "./RoutePath";
import GenericsPage from "../../pages/misc/GenericsPage";

export const routerItems = [
  {
    path: RoutePath.GROUP_PEAR,
    element: <GroupPeer />,
  },
  {
    path: RoutePath.TRANSITION,
    element: <Transition />,
  },
  {
    path: RoutePath.RESPONSIVE_GRID,
    element: <ResponsiveGridLayout />,
  },
  {
    path: RoutePath.DYNAMIC_COLOR,
    element: <DynamicColor />,
  },
  {
    path: RoutePath.REUSABLE_THEME,
    element: <ReusableThemeStyle />,
  },
  {
    path: RoutePath.TAILWIND_MERGE,
    element: <TailwindMerge className="bg-blue-400" />,
  },
  {
    path: RoutePath.REACT_QUERY,
    element: <ReactQueryExample />,
  },
  {
    path: RoutePath.ERROR_BOUNDARY,
    element: <ErrorBoundaryExample />,
  },
  {
    path: RoutePath.ERROR_BOUNDARY_RENDER,
    element: <ErrorBoundaryRenderExample />,
  },
  {
    path: RoutePath.GENERICS,
    element: <GenericsPage />,
  },
];
