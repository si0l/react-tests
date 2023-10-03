import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavPage } from "../types/NavPage";
import { useNavigate } from "react-router";

type Props = {
  navItems: NavPage[];
};

const NavItem: React.FC<Props> = ({ navItems }) => {
  const navigate = useNavigate();
  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.id} onClick={() => navigate(item.route)}>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavItem;
