import { Drawer } from "@mui/material";
import AppAccordion from "../../components/common/AppAccordion/AppAccordion";
import { styles } from "./styles";
import { menuItems } from "./menuItems";

const NavBar = () => {
  return (
    <Drawer sx={styles} variant="permanent" anchor="left">
      {menuItems.map((menuItem) => (
        <AppAccordion
          key={menuItem.id}
          title={menuItem.title}
          items={menuItem.items}
        />
      ))}
    </Drawer>
  );
};

export default NavBar;
