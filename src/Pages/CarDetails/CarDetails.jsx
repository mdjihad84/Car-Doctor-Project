
import Hero from "./CarHero";
import DetailCard  from "./DetailCard";
import { Helmet } from "react-helmet-async";

const CarDetails = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Car-Details</title>
      </Helmet>
      <Hero />
      <div className="p-8">
        <DetailCard/>
      </div>
    </div>
  );
};

export default CarDetails;
