export type NavigationItem = {
  id: string;
  href: string;
  icon: string | React.ReactNode;
  text: string;
  external?: boolean;
  type?: "link" | "text";
};
