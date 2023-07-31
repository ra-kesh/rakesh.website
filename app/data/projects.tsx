import { v4 as uuid } from "uuid";

export type ProjectItem = {
  id: string;
  title: string;
  link: string;
  source: string;
  stack: Array<string>;
  description: string;
  active: boolean;
};

export const PROJECTS: Array<ProjectItem> = [
  {
    id: uuid(),
    title: "MAD",
    link: "https://moto-armor-depot.netlify.app/products",
    source: "https://github.com/ra-kesh/armor",
    stack: ["react", "node", "express", "mongodb"],
    description: "Ecommerce App",
    active: true,
  },
  {
    id: uuid(),
    title: "RAVE",
    link: "https://raveit.netlify.app/",
    source: "https://github.com/ra-kesh/rave",
    stack: ["react", "node", "express", "mongodb"],
    description: "Social Media App",
    active: false,
  },
  {
    id: uuid(),
    title: "RunReact",
    link: "https://runreact.netlify.app/",
    source: "https://github.com/ra-kesh/snowpack-ide",
    stack: ["react", "esbuild-wasm", "typescript"],
    description: "My Own Code Sandbox",
    active: true,
  },
  {
    id: uuid(),
    title: "Torque",
    link: "https://torquetv.netlify.app/",
    source: "https://github.com/ra-kesh/torque",
    stack: ["react", "node", "express", "mongodb"],
    description: "Video Library App",
    active: false,
  },
  {
    id: uuid(),
    title: "Rto quiz",
    link: "https://rto-quiz.netlify.app/",
    source: "https://github.com/ra-kesh/rto-quiz",
    stack: ["react", "node", "express", "mongodb", "typescript", "chakra ui"],
    description: "Video Library App",
    active: false,
  },
];
