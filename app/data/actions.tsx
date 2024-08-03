import { v4 as uuid } from "uuid";
import { NavigationItem } from "../types";
import { siteConfig } from "../lib/config";
import {
  PhBriefcaseSimpleBold,
  PhFileTextBold,
  PhGithubLogoBold,
  PhUserBold,
} from "../components/Icon.Component";

export const ACTIONS: Array<NavigationItem> = [
  {
    id: uuid(),
    href: "/about",
    icon: <PhUserBold className="mr-3" />,
    text: "About",
  },
  {
    id: uuid(),
    href: "/work",
    icon: <PhBriefcaseSimpleBold className="mr-3" />,
    text: "Work",
  },
  {
    id: uuid(),
    href: siteConfig.links.github,
    external: true,
    icon: <PhGithubLogoBold className="mr-3" />,
    text: "Github",
  },
  {
    id: uuid(),
    href: siteConfig.links.resume,
    external: true,
    icon: <PhFileTextBold className="mr-3" />,
    text: "Resume",
  },
];
