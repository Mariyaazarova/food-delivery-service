import { Link } from "react-router-dom";
import { SwitchThemeButton } from "../../context/button-context/switch-theme-button";
import { AuthButton } from "../../context/button-context/auth-button";
import { CContainer } from "@coreui/react";

export const Header = () => {
  return (
    <header className="header ">
      <CContainer>
        <Link className="nav-link " to="/">
          FOOD DELIVERY APP
        </Link>
        <div className="d-flex gap-2">
          <SwitchThemeButton />
          <AuthButton />
        </div>
      </CContainer>
    </header>
  );
};
