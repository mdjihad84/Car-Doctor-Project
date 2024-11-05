import AboutImg from '../../assets/images/about_us/person.jpg';
import PartsImg from '../../assets/images/about_us/parts.jpg';

const componentName = () => {
  return (
    <div className="flex justify-around mt-10">
      <div className="">
        <img className='w-[500px] h-[473px]' src={AboutImg} alt="" />
        <img className='w-[327px] h-[332px] mt-[-195px] ml-[173px]' src={ PartsImg} alt="" />

      </div>
      <div className="">
        <h5 className='font-bold text-[#FF3811] text-xl'>About Us</h5>
        <h3 className='font-bold text-[45px] text-black w-[380px]'>We are qualified & of experience in this field</h3>
        <p className='font-normal text-base w-[420px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p className='font-normal text-base w-[435px]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <button type="button" className="text-white w-[170px] h-[56px] rounded border border-white bg-[#FF3811]">Latest Project</button>
      </div>
    </div>
  );
};

export default componentName;