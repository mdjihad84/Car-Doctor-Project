import CardImg from "../../assets/images/banner/3.jpg";

const ServiceCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4">
      <div className="flex-shrink-0">
        <img className="w-full md:w-[752px] md:h-[400px] object-cover" src={CardImg} alt="Banner" />
        <h3 className="text-[#151515] text-[45px] font-bold my-[30px] text-center md:text-left">Unique Car Engine Service</h3>
      </div>
      <div className="flex-grow flex flex-col items-center bg-[#F3F3F3] pb-[30px] lg:pb-[0px] w-full md:w-[364px] h-auto md:h-[490px] rounded-lg shadow-md">
        <h1 className="font-bold text-[25px] text-[#151515] py-4 text-center">Services</h1>
        <div className="text-base font-semibold text-[#151515] w-full flex flex-col items-center">
          <h5 className="bg-[#FF3811] w-[300px] text-white py-4 hover:text-white mb-2 font-semibold cursor-pointer text-center flex justify-between items-center px-4">
            <span>Full Car Repair</span>
            <i className="fa-solid fa-arrow-right text-white cursor-pointer"></i>
          </h5>
          <h5 className="bg-white w-[300px] py-4 hover:text-white mb-2 cursor-pointer hover:bg-[#FF3811] text-center transition duration-300 flex justify-between items-center px-4">
            <span>Engine Repair</span>
            <i className="fa-solid fa-arrow-right text-white cursor-pointer"></i>
          </h5>
          <h5 className="bg-white w-[300px] py-4 hover:text-white mb-2 cursor-pointer hover:bg-[#FF3811] text-center transition duration-300 flex justify-between items-center px-4">
            <span>Automatic Services</span>
            <i className="fa-solid fa-arrow-right text-white cursor-pointer"></i>
          </h5>
          <h5 className="bg-white w-[300px] py-4 hover:text-white mb-2 cursor-pointer hover:bg-[#FF3811] text-center transition duration-300 flex justify-between items-center px-4">
            <span>Engine Oil Change</span>
            <i className="fa-solid fa-arrow-right text-white cursor-pointer"></i>
          </h5>
          <h5 className="bg-white w-[300px] py-4 hover:text-white cursor-pointer hover:bg-[#FF3811] text-center transition duration-300 flex justify-between items-center px-4">
            <span>Battery Charge</span>
            <i className="fa-solid fa-arrow-right text-white cursor-pointer"></i>
          </h5>
        </div>

      </div>
    </div>
  );
};

export default ServiceCard;




