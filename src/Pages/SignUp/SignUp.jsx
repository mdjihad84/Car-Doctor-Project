
import { Helmet } from "react-helmet-async";
import SignUpImg from "../../assets/images/login/SignUp.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Car | SignUp</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row items-center mx-auto h-full bg-transparent">
        {/* Image section */}
        <div className="w-full lg:w-[50%] mt-[-50px] sm:mt-[-100px] md:mt-[-130px] lg:mt-[-170px]">
          <img src={SignUpImg} alt="Sign Up" className="w-full h-auto" />
        </div>

        {/* Form section */}
        <div className="mb-[200px] lg:w-[611px] p-8 lg:h-[730px] border-2 hover:border-blue-500 bg-transparent">
          <h1 className="font-bold text-center text-3xl text-black">Sign Up</h1>
          <form className="flex flex-col items-center mt-4">
            <div className="w-full max-w-xs">
              <label className="block text-[#444444] text-lg font-bold mb-2">Name</label>
              <input
                type="email"
                placeholder="Type here"
                className="w-full h-[35px] mb-4 p-4 text-base bg-white border rounded-md"
              />

              <label className="block text-[#444444] text-lg font-bold mb-2 mt-6">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full h-[35px] mb-4 p-4 text-base bg-white border rounded-md"
              />

              <label className="block text-[#444444] text-lg font-bold my-6">Confirm Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                readOnly
                className="w-full h-[35px] p-4 text-base bg-white border rounded-md mb-2"
              />
              <button className="w-full font-bold text-white bg-[#FF3811] mb-4 p-4 rounded-md mt-6">
                Create Account
              </button>
              <p className="text-center text-[#737373] my-4 text-xl">
                Already have an account? <a className="font-bold cursor-pointer text-[#FF3811]">Login</a>
              </p>
            </div>
          </form>

          <h3 className="text-center text-black text-lg mt-3 font-medium">Or sign in with</h3>
          <div className="flex justify-center gap-4 mt-4">
            {[
              { href: "https://www.facebook.com/jahidulislam.jihad.773124/", icon: "fa-facebook-f" },
              { href: "https://x.com/jahidul16956", icon: "fa-twitter" },
              { href: "https://github.com/mdjihad84", icon: "fa-github" }
            ].map((social, index) => (
              <a
                key={index}
                className="w-[52px] h-[52px] rounded-full border border-black flex items-center justify-center bg-transparent"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab ${social.icon} text-[20px]`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

