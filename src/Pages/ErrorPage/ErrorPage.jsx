import { NavLink } from "react-router-dom";
import ErrorImg from "../../assets/images/ErrorPage/Frame (3).png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={ErrorImg} alt="Error" />
      <NavLink to="/" className="mt-4 text-blue-500 hover:underline">
        Go Back Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;

