import { useContext } from "react";
import { ThemeContext } from "context/theme";

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const labelTheme = theme === "dark" ? "Tema oscuro" : "Tema claro";
  const isDark = theme === "dark";
  const isLight = theme === "light";

  return { isDark, isLight, labelTheme, toggleTheme };
}
