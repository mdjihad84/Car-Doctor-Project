
import Hero from "./CarHero";
import CarCard from "./CarCard";
import { Helmet } from "react-helmet-async";

const CarManage = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Doctor | Home</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
       <CarCard/>
      </div>
    </div>
  );
};
export default CarManage;