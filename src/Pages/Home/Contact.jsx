import contactImg from '../../assets/images/Contact/001-timetable.png';
const componentName = () => {
  return (
    <div className="bg-black h-[250px] flex justify-around items-center mt-16">
      <div className="flex items-center">
        <img className='px-6 h-[40px]' src={contactImg} alt="" />
        <div className="">
          <p className='text-base font-medium'>We are open monday-friday</p>
            <h5 className='text-[25px] font-bold'>7:00 am - 9:00 pm</h5>
        </div>
      </div>
      <div className="flex items-center">
        <img className='px-6 h-[40px]' src={contactImg} alt="" />
        <div className="">
          <p className='text-base font-medium'>We are open monday-friday</p>
            <h5 className='text-[25px] font-bold'>7:00 am - 9:00 pm</h5>
        </div>
      </div>
      <div className="flex items-center">
        <img className='px-6 h-[40px]' src={contactImg} alt="" />
        <div className="">
          <p className='text-base font-medium'>We are open monday-friday</p>
          <h5 className='text-[25px] font-bold'>7:00 am - 9:00 pm</h5>
        </div>
      </div>
    </div>
  );
};

export default componentName;