import HeroImg from "../../assets/images/banner/4.jpg";
import VectorImg from "../../assets/images/team/Vector (6).png";

const ServiceHero = () => {
  return (
    <div className="mb-8">
      <div>
        <div
          className="relative bg-cover bg-center h-[400px] lg:h-[319px] rounded-[10px] md:h-[70vh] sm:h-[50vh]"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 bg-black bg-opacity-50">
            <h2 className="text-white text-[35px] font-bold mb-4 w-full md:text-[35px] lg:text-[45px] p-[60px] md:p-[40px] sm:p-[20px]">
              Service Details
            </h2>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-[-49px] ml-[70vh]">
          <img src={VectorImg} alt="" className="" />
          <span className="absolute inset-0 flex mr-[63vh] items-center justify-center text-white font-bold text-xl">
            Home/Service Details
          </span>
      </div>
    </div>
  );
};

export default ServiceHero;
