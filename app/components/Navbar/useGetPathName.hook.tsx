import { usePathname } from "next/navigation";

export const useGetPathName = () => {
  let pathName = usePathname();

  if (pathName === "/") {
    return (pathName = "home");
  } else {
    return pathName.substring(1);
  }
};
