import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { RoutePath } from "../../router/RoutePath";
import { NavPage } from "../../types/NavPage";

export const reactQueryNavItems: NavPage[] = [
  {
    id: 1,
    route: RoutePath.REACT_QUERY,
    label: "React Query",
    icon: <FiberManualRecordRoundedIcon />,
  },
];
