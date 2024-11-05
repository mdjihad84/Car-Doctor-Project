import SectionTitle from "../../Components/SectionTitle";
import testimonialImg1 from "../../assets/images/team/image.png";
import testimonialImg2 from "../../assets/images/team/quote 1.png";
import StarIcon from "../../assets/images/team/Frame (1).png";

const ComponentName = () => {
  return (
    <div className="mb-16">
      <SectionTitle
        subtitle="Testimonial"
        title="What Customers Say"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {[1, 2].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={testimonialImg1}
                alt="Awlad Hossain"
              />
              <div className="testimonial-details ml-4">
                <h3 className="font-bold text-[25px] text-[#444444]">Awlad Hossain</h3>
                <h5 className="text-gray-600">Customer</h5>
              </div>
              <div className="ml-auto">
                <img src={testimonialImg2} alt="Quote" className="w-[30px] h-[30px]" />
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="flex mt-4">
              {Array(5).fill().map((_, i) => (
                <img key={i} src={StarIcon} alt="Star icon" className="w-5 h-5 mr-1" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentName;




