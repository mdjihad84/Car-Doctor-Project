
import Hero from "../ServicePage/ServiceHero";
import ServiceCard from "../ServicePage/ServiceCard";
import EngineService from "../ServicePage/EngineService";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car | Service</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
        <ServiceCard/>
        <EngineService/>
      </div>
    </div>
  );
};
export default Home;
