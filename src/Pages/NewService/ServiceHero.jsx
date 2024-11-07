import HeroImg from "../../assets/images/banner/4.jpg";
import RedImg from "../../assets/images/checkout/Vector (1).png";

const ComponentName = () => {
  return (
    <div className="mb-8">
      <div>
        <div
          className="relative bg-cover bg-center rounded-[10px] h-[50vh] sm:h-[50vh] md:h-[70vh] lg:h-[600px]"
          style={{ backgroundImage: `url(${HeroImg})` }}>
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-black bg-opacity-50">
            <h2 className="text-white font-bold mb-4 text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] leading-tight">
              Add New Service
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-[80%] sm:w-[300px] md:w-[256px] h-[50px] bg-[#FF3811] mt-[-25px] sm:mt-[-49px] mx-auto text-center text-lg sm:text-xl text-white leading-6 font-medium rounded-tr-[60px] rounded-tl-[60px]">
        <img className="w-full h-full object-cover rounded-tr-[60px] rounded-tl-[60px]" src={RedImg} alt="" />
        <span className="absolute inset-0 flex items-center justify-center text-white rounded-tr-[60px] rounded-tl-[60px]">
          Home / Checkout
        </span>
      </div>
    </div>
  );
};

export default ComponentName;
