import HeroImg from "../../assets/images/banner/Hands.jpg";

const Hero = () => {
  return (
    <div className="mb-8">
      <div>
        <div
          className="relative bg-cover bg-center h-[270px] lg:h-[319px] rounded-[10px] md:h-[70vh] sm:h-[50vh]"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 bg-black bg-opacity-50">
            <h2 className="text-white lg:text-[45px] font-bold mb-4 w-full md:text-[35px] text-[30px] p-[35px] lg:p-[38px]  md:p-[40px] sm:p-[20px] ml-[28px]">
              Cart Details
            </h2>
            <p className="font-medium text-base text-[#FF3811] ml-[70px] mt-[-50px]">Home - Manage All Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;