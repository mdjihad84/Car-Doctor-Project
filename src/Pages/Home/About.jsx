import AboutImg from '../../assets/images/about_us/person.jpg';
import PartsImg from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="flex flex-wrap justify-around mt-20 px-4 lg:px-0">
      <div className="relative w-full sm:w-[300px] lg:w-[460px]">
        <img className="lg:w-full h-[300px] w-[] md:h-[400px] lg:h-[420px] rounded-[8px]" src={AboutImg} alt="About us" />
        <img className="absolute w-[189px] lg:w-[60%] lg:w-[327px] top-[79%] left-[70%] transform translate-x-[-50%] translate-y-[-50%] sm:top-[75%] sm:left-[70%] md:top-[70%] md:left-[65%] lg:top-[90%] lg:mt-[-10px] lg:ml-[23px]" src={PartsImg} alt="Parts" />
      </div>

      <div className="w-full sm:w-[50%] lg:w-[45%] mt-10 lg:mt-0">
        <h5 className="font-bold text-[#FF3811] text-xl mb-2">About Us</h5>
        <h3 className="font-bold text-[28px] sm:text-[35px] lg:text-[45px] text-black leading-tight mb-4">
          We are qualified & of experience in this field
        </h3>
        <p className="font-normal text-sm sm:text-base lg:text-lg text-gray-700 mb-4 leading-7 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <p className="font-normal text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-7 text-[#737373]">
          The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <button
          type="button"
          className="text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811]">
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default About;

