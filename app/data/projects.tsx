import { v4 as uuid } from "uuid";
import { ProjectItem } from "../types";

export const PROJECTS: Array<ProjectItem> = [
  {
    id: uuid(),
    title: "MAD",
    link: "https://moto-armor-depot.netlify.app/",
    linkText: "rakyesh.com/mad",
    source: "https://github.com/ra-kesh/armor",
    stack: ["react", "node", "express", "mongodb"],
    description:
      "An Ecommerce App created with MERN stack as an assignment for NeogCamp",
  },
  {
    id: uuid(),
    title: "RAVE",
    link: "https://raveit.netlify.app/",
    linkText: "rakyesh.com/rave",
    source: "https://github.com/ra-kesh/rave",
    stack: ["react", "node", "express", "mongodb", "redux toolkit"],
    description:
      "A Social Media App created with MERN stack as an assignment for NeogCamp",
  },
  {
    id: uuid(),
    title: "Run React",
    link: "https://runreact.netlify.app/",
    source: "https://github.com/ra-kesh/snowpack-ide",
    linkText: "rakyesh.com/run",
    stack: ["react", "esbuild-wasm", "typescript"],
    description:
      "An IDE that can fetch packages from UNPKG and bundle them together on the browser using ESBUILD-WASM.",
  },
  // {
  //   id: uuid(),
  //   title: "Torque",
  //   link: "https://torquetv.netlify.app/",
  //   linkText: "https://www.rakyesh.com/torque",
  //   source: "https://github.com/ra-kesh/torque",
  //   stack: ["react", "node", "express", "mongodb"],
  //   description:
  //     "An Video Library App created using MERN stack as an assignment for NeogCamp",
  // },
  // {
  //   id: uuid(),
  //   title: "Rto quiz",
  //   link: "https://rto-quiz.netlify.app/",
  //   linkText: "rakesh.website/quiz",
  //   source: "https://github.com/ra-kesh/rto-quiz",
  //   stack: ["react", "node", "express", "mongodb", "typescript", "chakra ui"],
  //   description:
  //     "A Quiz App created using MERN stack as an assignment for NeogCamp",
  // },
];
