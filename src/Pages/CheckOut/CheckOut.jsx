
import Hero from "./CheckHero";
import Form from "./CheckForm";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-CheckOut</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
       <Form/>
      </div>
    </div>
  );
};
export default Home;

