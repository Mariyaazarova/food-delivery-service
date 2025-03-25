import { CContainer } from "@coreui/react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (!currentYear) return null;

  return (
    <footer className="footer px-4 ">
      <CContainer className="d-flex align-self-end justify-content-end">
        ©FLAVOR PALLETE | {currentYear}
      </CContainer>
    </footer>
  );
};
