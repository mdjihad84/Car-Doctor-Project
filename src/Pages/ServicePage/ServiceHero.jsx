import HeroImg from "../../assets/images/banner/4.jpg";

const ComponentName = () => {
  return (
    <div className="mb-8">
      <div>
        <div
          className="relative bg-cover bg-center h-screen rounded-[10px] md:h-[70vh] sm:h-[50vh]"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 bg-black bg-opacity-50">
            <h2 className="text-white text-[45px] font-bold mb-4 w-full md:text-[35px] sm:text-[30px] p-[60px] md:p-[40px] sm:p-[20px]">
              Service Details
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
