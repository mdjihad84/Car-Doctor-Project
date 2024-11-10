import AboutImg from '../../assets/images/about_us/person.jpg';
import PartsImg from '../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="flex flex-wrap justify-around mt-20">
      <div className="relative w-full sm:w-auto">
        <img className="w-full max-w-[530px] h-[386px]" src={AboutImg} alt="" />
        <img className="absolute w-[60%] max-w-[327px] h-auto top-[82%] left-[70%] transform translate-x-[-50%] translate-y-[-50%] lg:mt-[-10px] lg:ml-[0px]" src={PartsImg} alt="" />
      </div>
      <div className="w-full sm:w-[50%] mt-[20px] lg:w-[45%] px-4">
        <h5 className="font-bold text-[#FF3811] text-xl">About Us</h5>
        <h3 className="font-bold text-[28px] sm:text-[35px] lg:text-[45px] text-black leading-tight">We are qualified & of experience in this field</h3>
        <p className="font-normal text-sm sm:text-base lg:text-lg text-gray-700 mt-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <p className="font-normal text-sm sm:text-base lg:text-lg text-gray-700 mt-4">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <button type="button" className="mt-6 text-white w-full sm:w-[170px] h-[56px] rounded border border-white bg-[#FF3811]">Latest Project</button>
      </div>
    </div>
  );
};

export default About;
