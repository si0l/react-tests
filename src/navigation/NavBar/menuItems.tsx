import NavItem from "./NavItem";
import { errorBoundaryNavItems } from "./NavPages/errorBoundaryNavPages";
import { reactQueryNavItems } from "./NavPages/reactQueryNavPages";
import { tailwindNavItems } from "./NavPages/tailwindNavPages";
import { various } from "./NavPages/various";

export const menuItems = [
  {
    id: 1,
    title: "Tailwind CSS Techniques",
    items: <NavItem navItems={tailwindNavItems} />,
  },
  {
    id: 2,
    title: "React Query",
    items: <NavItem navItems={reactQueryNavItems} />,
  },
  {
    id: 3,
    title: "Error Boundary",
    items: <NavItem navItems={errorBoundaryNavItems} />,
  },
  {
    id: 4,
    title: "Various",
    items: <NavItem navItems={various} />,
  },
];
