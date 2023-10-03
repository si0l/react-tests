import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { RoutePath } from "../../router/RoutePath";
import { NavPage } from "../../types/NavPage";

export const tailwindNavItems: NavPage[] = [
  {
    id: 1,
    route: RoutePath.GROUP_PEAR,
    label: "Group and Peer",
    icon: <FiberManualRecordRoundedIcon />,
  },
  {
    id: 2,
    route: RoutePath.TRANSITION,
    label: "Transition",
    icon: <FiberManualRecordRoundedIcon />,
  },
  {
    id: 3,
    route: RoutePath.RESPONSIVE_GRID,
    label: "Responsive Grid",
    icon: <FiberManualRecordRoundedIcon />,
  },
  {
    id: 4,
    route: RoutePath.DYNAMIC_COLOR,
    label: "Dynamic Color",
    icon: <FiberManualRecordRoundedIcon />,
  },
  {
    id: 5,
    route: RoutePath.REUSABLE_THEME,
    label: "Reusable Theme Shadow",
    icon: <FiberManualRecordRoundedIcon />,
  },
  {
    id: 6,
    route: RoutePath.TAILWIND_MERGE,
    label: "Tailwind Merge",
    icon: <FiberManualRecordRoundedIcon />,
  },
];
