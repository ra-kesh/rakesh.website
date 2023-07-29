import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

type NavigationItem = {
  id: string;
  href: string;
  icon: string | React.ReactNode;
  text: string;
  external?: boolean;
};

export const ACTIONS: Array<NavigationItem> = [
  {
    id: uuid(),
    href: "/about",
    icon: <Icon icon="feather:user" className="mr-3" />,
    text: "About",
  },
  {
    id: uuid(),
    href: "/projects",
    icon: <Icon icon="feather:code" className="mr-3" />,
    text: "Projects",
  },
  {
    id: uuid(),
    href: "/blogs",
    icon: <Icon icon="feather:edit-3" className="mr-3" />,
    text: "Blogs",
  },

  {
    id: uuid(),
    href: "https://github.com/ra-kesh",
    external: true,
    icon: <Icon icon="feather:github" className="mr-3" />,
    text: "Github",
  },
  {
    id: uuid(),
    href: "https://rakesh.website/cv",
    external: true,
    icon: <Icon icon="feather:file-text" className="mr-3" />,
    text: "Resume",
  },
];
