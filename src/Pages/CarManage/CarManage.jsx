
import Header from "./Header";
import ManageHero from "./ManageHero";
import ManageCard from "./ManageCard";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

const CarManage = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Manage</title>
      </Helmet>
      <Header/>
      <ManageHero/>
      <div className="">
       <ManageCard/>
       <Footer/>
      </div>
    </div>
  );
};
export default CarManage;
