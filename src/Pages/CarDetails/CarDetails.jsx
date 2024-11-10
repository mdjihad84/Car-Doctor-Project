

import DetailsHero from "./DetailsHero";
import DetailCard  from "./DetailCard";
import { Helmet } from "react-helmet-async";

const CarDetails = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Car-Details</title>
      </Helmet>
      <DetailsHero />
      <div className="p-6">
        <DetailCard/>
      </div>
    </div>
  );
};

export default CarDetails;
