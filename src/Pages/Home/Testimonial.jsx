import SectionTitle from "../../Components/SectionTitle";
import testimonialImg1 from "../../assets/images/team/image.png";
import testimonialImg2 from "../../assets/images/team/quote 1.png";
import StarIcon from "../../assets/images/team/Frame (1).png";

const ComponentName = () => {
  return (
    <div>
      <SectionTitle
        subtitle="Testimonial"
        title="What Customers Say"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="flex justify-around my-8">
        <div className="">
          <div className="flex items-start">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={testimonialImg1}
              alt="Awlad Hossain"
            />
            <div className="testimonial-details mr-12 pl-4">
              <h3 className="font-bold text-[25px] text-[#444444]">Awlad Hossain</h3>
              <h5>Customer</h5>
            </div>
            <div>
              <img src={testimonialImg2} alt="Quote" />
            </div>
          </div>
          <div>
            <p className="w-[430px] my-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="flex">
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-start">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={testimonialImg1}
              alt="Awlad Hossain"
            />
            <div className="testimonial-details mr-12 pl-4">
              <h3 className="font-bold text-[25px] text-[#444444]">Awlad Hossain</h3>
              <h5>Customer</h5>
            </div>
            <div>
              <img src={testimonialImg2} alt="Quote" />
            </div>
          </div>
          <div>
            <p className="w-[430px] my-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="flex">
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
              <img src={StarIcon} alt="Star icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComponentName;



