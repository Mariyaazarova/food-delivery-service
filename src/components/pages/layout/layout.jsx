import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { ProgressBar } from "../../progress-bar/progress-bar";

export const Layout = () => {
  return (
    <div className="wrapper d-flex flex-column min-vh-100">
      <ProgressBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
