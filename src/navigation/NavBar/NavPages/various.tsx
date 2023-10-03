import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import { RoutePath } from "../../router/RoutePath";
import { NavPage } from "../../types/NavPage";

export const various: NavPage[] = [
  {
    id: 1,
    route: RoutePath.GENERICS,
    label: "Generics",
    icon: <FiberManualRecordRoundedIcon />,
  }
];
