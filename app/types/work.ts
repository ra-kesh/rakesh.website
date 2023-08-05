export type WorkItem = {
  id: string;
  title: string;
  description: string;
};

export type ProjectItem = WorkItem & {
  link: string | URL;
  linkText: React.ReactNode | string;
  source: string | URL;
  stack: Array<string>;
};

export type BlogItem = WorkItem & {
  dev: string;
  hashnode: string;
  published: string;
};
