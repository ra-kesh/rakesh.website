export type WorkItem = {
  id: string;
  title: string;
  description?: string;
  published?: string;
  link?: string;
  source?: string;
  dev?: string;
  hashnode?: string;
  stack?: Array<string>;
  active?: boolean;
};
