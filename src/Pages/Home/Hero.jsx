import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import HeroImg from "../../assets/images/banner/5.jpg";
import HeroImg1 from "../../assets/images/banner/5.jpg";
import HeroImg2 from "../../assets/images/banner/5.jpg";
import HeroImg3 from "../../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <Carousel
      className="text-center relative"
      autoPlay
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
          style={{ backgroundImage: `url(${HeroImg})` }}
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
                className="bg-transparent text-white w-full sm:w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] hover:text-black focus:bg-[#FF3811] focus:text-black active:bg-[#FF3811] active:text-black transition duration-300"
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
        <img
          src={HeroImg1}
          alt=""
          className="w-full object-cover h-[600px] rounded-[10px]"
        />
      </div>
      <div>
        <img
          src={HeroImg2}
          alt=""
          className="w-full object-cover h-[600px] rounded-[10px]"
        />
      </div>
      <div>
        <img
          src={HeroImg3}
          alt=""
          className="w-full object-cover h-[600px] rounded-[10px]"
        />
      </div>
    </Carousel>
  );
};

export default Banner;

