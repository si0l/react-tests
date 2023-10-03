import { ReactNode } from "react";

export type NavPage = {
  id: number;
  route: string;
  label: string;
  icon: ReactNode;
};
