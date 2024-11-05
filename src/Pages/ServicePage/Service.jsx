import HeroImg from "../../assets/images/banner/4.jpg";

const componentName = () => {
  return (
    <div className="">
          <div>
        <div
          className="relative bg-cover bg-center h-screen sm:h-[600px] rounded-[10px]"
          style={{ backgroundImage: `url(${HeroImg})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 bg-black bg-opacity-50">
            <h2 className="text-white text-3xl sm:text-6xl font-bold mb-4 w-full">
              Service Details
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default componentName;
