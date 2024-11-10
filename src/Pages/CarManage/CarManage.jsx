
import ManageHero from "./ManageHero";
import ManageCard from "./ManageCard";
import { Helmet } from "react-helmet-async";

const CarManage = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Manage</title>
      </Helmet>
      <ManageHero/>
      <div className="p-6">
       <ManageCard/>
      </div>
    </div>
  );
};
export default CarManage;
