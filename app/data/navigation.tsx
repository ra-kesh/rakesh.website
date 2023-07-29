import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import { NavigationItem } from "../types";
import { ACTIONS } from ".";

export const NAVIGATIONS: Array<NavigationItem> = [
  {
    id: uuid(),
    href: "/",
    icon: <Icon icon="feather:home" className="mr-3" />,
    text: "Home",
  },
  ...ACTIONS,
];
