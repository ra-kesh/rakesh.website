import { v4 as uuid } from "uuid";
import { BlogItem, WorkItem } from "../types";

export const BLOGS: Array<BlogItem> = [
  {
    id: uuid(),
    title: "Demystifying DOM(s)",
    description: "Everything you need to know about DOM, V-DOM, Shadow DOM",
    published: "December 26th, 2020",
    dev: "https://dev.to/rakesh/demystifying-dom-s-everything-you-need-to-know-about-dom-v-dom-shadow-dom-cdj",
    hashnode:
      "https://rakesh.hashnode.dev/demystifying-doms-everything-you-need-to-know-about-dom-v-dom-shadow-dom",
  },
  {
    id: uuid(),
    title: "How does javascript really work ",
    description: "A Peek under the inner working of the javascript",
    published: "November 24th, 2020",
    dev: "https://dev.to/rakesh/how-does-javascript-really-work-a-pick-under-the-hood-4kb2",
    hashnode:
      "https://rakesh.hashnode.dev/how-does-javascript-really-work-a-peek-under-the-hood",
  },
  {
    id: uuid(),
    title: "How did I remove the rate limit from my minion translator ",
    description: "A NeogCamp story about working around a rate limited api",
    published: "December 22nd, 2020",
    dev: "https://dev.to/rakesh/how-did-i-remove-the-rate-limit-from-my-minion-translator-and-how-you-can-do-it-too-a-neogcamp-story-2kgp",
    hashnode:
      "https://rakesh.hashnode.dev/how-did-i-remove-the-rate-limit-from-my-minion-translator-and-how-you-can-do-it-too-a-neog-camp-story",
  },
];
