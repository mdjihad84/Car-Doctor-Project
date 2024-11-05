import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeroImg1 from "../../assets/images/homeCarousel/1.jpg";
import HeroImg2 from "../../assets/images/homeCarousel/2.jpg";
import HeroImg3 from "../../assets/images/homeCarousel/3.jpg";
import HeroImg4 from "../../assets/images/homeCarousel/4.jpg";

const Hero = () => {
  return (
    <Carousel
      className="text-center relative"
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        return (
          <li
            className={`inline-block w-3 h-3 mx-1 rounded-full cursor-pointer ${
              isSelected ? "bg-[#FF3811]" : "bg-gray-400"
            }`}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`Slide ${index + 1} ${label}`}
          />
        );
      }}
    >
      <div>
        <div
          className="relative bg-cover bg-center h-screen sm:h-[600px] rounded-[10px]"
          style={{ backgroundImage: `url(${HeroImg1})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 sm:pl-20 bg-black bg-opacity-50">
            <h2 className="text-white text-3xl sm:text-6xl font-bold mb-4 w-full sm:w-[360px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white mb-6 font-normal text-base sm:text-lg w-full sm:w-[450px]">
              There are many variations of passages of available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811] hover:bg-[#FF3811] hover:text-black focus:bg-[#FF3811] focus:text-black active:bg-[#FF3811] active:text-black transition duration-300"
              >
                Discover More
              </button>
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] transition duration-300"
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="relative bg-cover bg-center h-screen sm:h-[600px] rounded-[10px]"
          style={{ backgroundImage: `url(${HeroImg2})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 sm:pl-20 bg-black bg-opacity-50">
            <h2 className="text-white text-3xl sm:text-6xl font-bold mb-4 w-full sm:w-[360px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white mb-6 font-normal text-base sm:text-lg w-full sm:w-[450px]">
              There are many variations of passages of available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811] hover:bg-[#FF3811] hover:text-black focus:bg-[#FF3811] focus:text-black active:bg-[#FF3811] active:text-black transition duration-300"
              >
                Discover More
              </button>
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] transition duration-300"
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="relative bg-cover bg-center h-screen sm:h-[600px] rounded-[10px]"
          style={{ backgroundImage: `url(${HeroImg3})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 sm:pl-20 bg-black bg-opacity-50">
            <h2 className="text-white text-3xl sm:text-6xl font-bold mb-4 w-full sm:w-[360px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white mb-6 font-normal text-base sm:text-lg w-full sm:w-[450px]">
              There are many variations of passages of available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811] hover:bg-[#FF3811] hover:text-black focus:bg-[#FF3811] focus:text-black active:bg-[#FF3811] active:text-black transition duration-300"
              >
                Discover More
              </button>
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] transition duration-300"
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="relative bg-cover bg-center h-screen sm:h-[600px] rounded-[10px]"
          style={{ backgroundImage: `url(${HeroImg4})` }}
        >
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-6 sm:pl-20 bg-black bg-opacity-50">
            <h2 className="text-white text-3xl sm:text-6xl font-bold mb-4 w-full sm:w-[360px]">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-white mb-6 font-normal text-base sm:text-lg w-full sm:w-[450px]">
              There are many variations of passages of available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811] hover:bg-[#FF3811] hover:text-black focus:bg-[#FF3811] focus:text-black active:bg-[#FF3811] active:text-black transition duration-300"
              >
                Discover More
              </button>
              <button
                type="button"
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] transition duration-300"
              >
                Latest Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;

