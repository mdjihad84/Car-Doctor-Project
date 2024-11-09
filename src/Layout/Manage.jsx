import { Outlet, useLocation } from "react-router-dom";
import Header from "../Pages/Shared/ManageHeader";

const PageHeader = () => {
  const location = useLocation();
  const noHeader = location.pathname.includes("/CarManage") || location.pathname.includes("/CarDetails");

  return (
    <div>
      {!noHeader && <Header />}
      <Outlet />
    </div>
  );
};

export default PageHeader;

