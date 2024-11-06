
import Hero from "./ServiceHero";
import Form from "./ServiceForm";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Doctor | Home</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
       <Form/>
      </div>
    </div>
  );
};
export default Home;