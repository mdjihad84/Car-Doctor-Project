import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroImg1 from "../../assets/images/homeCarousel/1.jpg";
import HeroImg2 from "../../assets/images/homeCarousel/2.jpg";
import HeroImg3 from "../../assets/images/homeCarousel/3.jpg";
import HeroImg4 from "../../assets/images/homeCarousel/4.jpg";

const HomeHero = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [clickedIcon, setClickedIcon] = useState(null);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1));
    setClickedIcon("next");
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 1 ? 4 : prev - 1));
    setClickedIcon("prev");
  };

  return (
    <div className="carousel w-full h-[400px] md:h-[600px] overflow-hidden">
      {[HeroImg1, HeroImg2, HeroImg3, HeroImg4].map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full ${
            activeSlide === index + 1 ? "block" : "hidden"
          }`}
        >
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 md:space-y-7 pl-4 md:pl-12 w-full md:w-1/2">
              <h2 className="text-2xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-sm md:text-base">
                There are many variations of passages available, but the majority have suffered alteration in some form.
              </p>
              <div>
                <button className="btn bg-[#FF3811] text-white mr-2 md:mr-5">
                  Discover More
                </button>
                <button className="btn hover:bg-[#FF3811] hover:text-white btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-2 md:left-5 right-2 md:right-5 bottom-0">
            {/* Left Icon */}
            <button
              className={`btn btn-circle border-none mr-2 md:mr-5 text-white ${
                clickedIcon === "prev" ? "bg-[#FF3811]" : ""
              }`}
              onClick={handlePrev}
            >
              ❮
            </button>
            {/* Right Icon */}
            <button
              className={`btn btn-circle border-none text-white ${
                clickedIcon === "next" ? "bg-[#FF3811]" : ""
              }`}
              onClick={handleNext}
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeHero;

