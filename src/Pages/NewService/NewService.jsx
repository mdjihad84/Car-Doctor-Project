
import Hero from "./ServiceHero";
import Form from "./ServiceForm";
import { Helmet } from "react-helmet-async";

const NewService = () => {
  return (
    <div className="">
      <Helmet>
        <title>New-Service</title>
      </Helmet>
      <Hero/>
      <div className="p-8">
       <Form/>
      </div>
    </div>
  );
};
export default NewService;