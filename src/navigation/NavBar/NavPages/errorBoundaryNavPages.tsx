import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { RoutePath } from "../../router/RoutePath";
import { NavPage } from "../../types/NavPage";

export const errorBoundaryNavItems: NavPage[] = [
  {
    id: 1,
    route: RoutePath.ERROR_BOUNDARY,
    label: "Error Boundary",
    icon: <FiberManualRecordRoundedIcon />,
  },
  {
    id: 2,
    route: RoutePath.ERROR_BOUNDARY_RENDER,
    label: "Error Boundary Render",
    icon: <FiberManualRecordRoundedIcon />,
  },
];
