
import Hero from "../ServicePage/ServiceHero";
import ServiceCard from "../ServicePage/ServiceCard";
import EngineService from "../ServicePage/EngineService";
import Servicedictionary from "./Servicedictionary";
import { Helmet } from "react-helmet-async";

const Service = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car | Service</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
        <ServiceCard/>
        <EngineService/>
        <Servicedictionary/>
      </div>
    </div>
  );
};
export default Service;
