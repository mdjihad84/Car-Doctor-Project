
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
  const location = useLocation();
  const noHeader =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");
  return (
    <div>
      {noHeader || <Header />}
      <Outlet />
      {noHeader || <Footer />}
    </div>
  );
};
export default Main;
