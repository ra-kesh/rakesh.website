import { v4 as uuid } from "uuid";

export const THEMES = [
  {
    id: uuid(),
    theme: "light",
    text: "Light",
  },
  {
    id: uuid(),
    theme: "dark",
    text: "Dark",
  },
  {
    id: uuid(),
    theme: "system",
    text: "System",
  },
];
