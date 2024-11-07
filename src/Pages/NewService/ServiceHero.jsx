import HeroImg from "../../assets/images/banner/4.jpg";
import RedImg from "../../assets/images/checkout/Vector (1).png";

const ComponentName = () => {
  return (
    <div className="mb-8">
      <div>
        <div
          className="relative bg-cover bg-center h-[400px] lg:h-[600px] rounded-[10px] md:h-[70vh] sm:h-[50vh]"
          style={{ backgroundImage: `url(${HeroImg})` }}>
    

          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 bg-black bg-opacity-50">
            <h2 className="text-white text-[45px] font-bold mb-4 w-full md:text-[35px] sm:text-[30px] p-[60px] md:p-[40px] sm:p-[20px]">
              Add New Service
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-[256px] h-[50px] bg-[#FF3811] mt-[-49px] mx-auto text-center text-xl text-white leading-6 font-medium rounded-tr-[60px] rounded-tl-[60px]">
        <img className="w-full h-full object-cover" src={RedImg} alt=""/>
        <span className="absolute inset-0 flex items-center justify-center text-white rounded-tr-[60px]">Home/Checkout</span>
    </div>
    </div>
  );
};

export default ComponentName;