import { v4 as uuid } from "uuid";
import { NavigationItem } from "../types";
import { siteConfig } from "../lib/config";
import {
  PhBriefcaseSimpleBold,
  PhFileTextBold,
  PhGithubLogoBold,
  PhHouseBold,
  PhLinkedinLogoBold,
  PhTwitterLogoBold,
  PhUserBold,
} from "../components/Icon.Component";

export const NAVIGATIONS: Array<Array<NavigationItem>> = [
  [
    {
      id: uuid(),
      href: "/",
      icon: <PhHouseBold className="mr-3" />,
      text: "Home",
    },
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
  ],
  [
    {
      id: uuid(),
      href: siteConfig.links.github,
      external: true,
      icon: <PhGithubLogoBold className="mr-3" />,
      text: "Github",
    },

    {
      id: uuid(),
      href: siteConfig.links.twitter,
      external: true,
      icon: <PhTwitterLogoBold className="mr-3" />,
      text: "Twitter",
    },
    {
      id: uuid(),
      href: siteConfig.links.linkedin,
      external: true,
      icon: <PhLinkedinLogoBold className="mr-3" />,
      text: "Linkedin",
    },
  ],
  [
    {
      id: uuid(),
      href: siteConfig.links.cv,
      external: true,
      icon: <PhFileTextBold className="mr-3" />,
      text: "Resume",
    },
  ],
];
