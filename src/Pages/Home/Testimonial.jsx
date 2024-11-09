import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import testimonialImg1 from "../../assets/images/team/image.png";
import testimonialImg3 from "../../assets/images/team/Ellipse(1).png";
import testimonialImg2 from "../../assets/images/team/quote 1.png";
import StarIcon from "../../assets/images/team/Frame (1).png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIcon, setActiveIcon] = useState(null); // Track active icon

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
      id: 3,
      img: testimonialImg1,
      name: "John Doe",
      feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      img: testimonialImg3,
      name: "Jane Smith",
      feedback: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-8">
          {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
            <div key={testimonial.id} className="relative bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={testimonial.img}
                  alt="Customer"
                />
                <div className="testimonial-details ml-4">
                  <h3 className="font-bold text-[25px] text-[#444444]">{testimonial.name}</h3>
                  <h5 className="text-gray-600">Customer</h5>
                </div>
                <div className="ml-auto">
                  <img src={testimonialImg2} alt="Quote" className="w-[30px] h-[30px]" />
                </div>
              </div>
              <p className="mt-4 text-gray-700">{testimonial.feedback}</p>
              <div className="flex mt-4">
                {Array(5).fill().map((_, i) => (
                  <img key={i} src={StarIcon} alt="Star icon" className="w-5 h-5 mr-1" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Left and Right navigation buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className={`btn bg-antiquewhite btn-circle border-none ml-[-30px] md:ml-[-47px] md:mr-5 text-white ${
              activeIcon === "prev" ? "bg-[#FF3811]" : ""
            }`}
            onClick={handlePrev}
          >
            ❮
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className={`btn bg-antiquewhite btn-circle border-none mr-[-30px] md:mr-[-47px] text-white ${
              activeIcon === "next" ? "bg-[#FF3811]" : ""
            }`}
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

