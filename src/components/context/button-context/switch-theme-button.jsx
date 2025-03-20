import CIcon from "@coreui/icons-react";
import { useTheme } from "../theme-context/use-theme";
import { cilMoon, cilSun } from "@coreui/icons";

export const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      document.body.setAttribute("data-coreui-theme", "dark");
      setTheme("dark");
    } else {
      document.body.setAttribute("data-coreui-theme", "light");
      setTheme("light");
    }
  };

  let iconToShow = theme === "light" ? cilSun : cilMoon;

  return (
    <button
      className="btn btn-link d-flex align-items-center show"
      onClick={toggleTheme}
    >
      <CIcon icon={iconToShow} size="lg" />
    </button>
  );
};
