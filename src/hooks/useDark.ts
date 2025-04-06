import { useTheme } from "next-themes";

export const useDark = () => {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === "dark";
};
