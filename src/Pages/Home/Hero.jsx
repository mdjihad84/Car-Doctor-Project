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
      renderArrowPrev={(onClickHandler, hasPrev, label) => 
        hasPrev && (
          <button
  type="button"
  onClick={onClickHandler}
  className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 flex items-center space-x-5"
  aria-label={label}
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) => 
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
            aria-label={label}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => (
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
      )}
    >
      {[HeroImg1, HeroImg2, HeroImg3, HeroImg4].map((img, index) => (
        <div key={index}>
          <div
            className="relative bg-cover bg-center h-[400px] lg:h-[600px] rounded-[10px]"
            style={{ backgroundImage: `url(${img})` }}
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
                  className="text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811] hover:bg-[#FF3811] focus:bg-[#FF3811] active:bg-[#FF3811] active:text-white"
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
      ))}
    </Carousel>
  );
};

export default Hero;
