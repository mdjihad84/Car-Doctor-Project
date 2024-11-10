

import Header from "./Header";
import DetailsHero from "./DetailsHero";
import DetailCard  from "./DetailCard";
import Footer  from "./Footer";
import { Helmet } from "react-helmet-async";

const CarDetails = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Car-Details</title>
      </Helmet>
      <Header/>
      <DetailsHero />
      <div className="p-8">
        <DetailCard/>
        <Footer/>
      </div>
    </div>
  );
};

export default CarDetails;
