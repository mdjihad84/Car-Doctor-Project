import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import testimonialImg1 from "../../assets/images/team/image.png";
import testimonialImg3 from "../../assets/images/team/Ellipse(1).png";
import testimonialImg2 from "../../assets/images/team/quote 1.png";
import StarIcon from "../../assets/images/team/Frame (1).png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIcon, setActiveIcon] = useState(null);

  const testimonials = [
    {
      id: 1,
      img: testimonialImg1,
      name: "Awlad Hossain",
      feedback: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 2,
      img: testimonialImg3,
      name: "Awlad Hossain",
      feedback: "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 4,
      img: testimonialImg3,
      name: "Jane Smith",
      feedback: "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      id: 3,
      img: testimonialImg1,
      name: "John Doe",
      feedback: "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  const handlePrev = () => {
    setActiveIcon("prev");
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2));
  };

  const handleNext = () => {
    setActiveIcon("next");
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <div className="mb-16">
      <SectionTitle
        subtitle="Testimonial"
        title="What Customers Say"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8 px-4 sm:px-0">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
              <div className="flex items-start">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={testimonial.img}
                  alt="Customer"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg md:text-xl text-[#444444]">{testimonial.name}</h3>
                  <h5 className="text-gray-600 text-sm md:text-base">Customer</h5>
                </div>
                <div className="ml-auto">
                  <img src={testimonialImg2} alt="Quote" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm md:text-base">{testimonial.feedback}</p>
              <div className="flex mt-4">
                {Array(5).fill().map((_, i) => (
                  <img key={i} src={StarIcon} alt="Star icon" className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Left and Right navigation buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className={`btn btn-circle bg-antiquewhite border-none ml-[-20px] md:ml-[-40px] text-white ${activeIcon === "prev" ? "bg-[#FF3811]" : ""}`}
            onClick={handlePrev}
          >
            ❮
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className={`btn btn-circle bg-antiquewhite border-none mr-[-20px] md:mr-[-40px] text-white ${activeIcon === "next" ? "bg-[#FF3811]" : ""}`}
            onClick={handleNext}
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;


