import contactImg from '../../assets/images/Contact/001-timetable.png';

const Contact = () => {
  return (
    <div className="bg-black h-[250px] flex flex-wrap justify-around items-center mt-16 sm:h-[300px] md:h-[350px]">
      <div className="flex items-center w-full sm:w-auto px-4 py-2 sm:py-0">
        <img className="px-6 h-[40px] sm:h-[50px]" src={contactImg} alt="" />
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium text-white">We are open Monday-Friday</p>
          <h5 className="text-lg sm:text-[25px] font-bold text-white">7:00 am - 9:00 pm</h5>
        </div>
      </div>
      <div className="flex items-center w-full sm:w-auto px-4 py-2 sm:py-0">
        <img className="px-6 h-[40px] sm:h-[50px]" src={contactImg} alt="" />
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium text-white">We are open Monday-Friday</p>
          <h5 className="text-lg sm:text-[25px] font-bold text-white">7:00 am - 9:00 pm</h5>
        </div>
      </div>
      <div className="flex items-center w-full sm:w-auto px-4 py-2 sm:py-0">
        <img className="px-6 h-[40px] sm:h-[50px]" src={contactImg} alt="" />
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base font-medium text-white">We are open Monday-Friday</p>
          <h5 className="text-lg sm:text-[25px] font-bold text-white">7:00 am - 9:00 pm</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
