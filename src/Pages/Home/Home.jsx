
import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Product from "./Product";
import OurTeam from "./OurTeam";
import Features from "./Features";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Car-Doctor | Home</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
        <About />
        <Service />
        <Contact />
        <Product/>
        <OurTeam/>
        <Features/>
        <Testimonial/>
      </div>
    </div>
  );
};
export default Home;
