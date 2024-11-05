import CardImg from "../../assets/images/banner/3.jpg";

const LoginComponent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-4">
      <div className="flex-shrink-0">
        <img className="w-full md:w-[752px] md:h-[400px] object-cover" src={CardImg} alt="Banner" />
      </div>
      <div className="flex-grow flex flex-col items-center bg-[#F3F3F3] w-full md:w-[364px] h-auto md:h-[490px] rounded-lg shadow-md">
        <h1 className="font-bold text-[25px] text-[#151515] py-4 text-center">Services</h1>
        <div className="text-base font-semibold text-[#151515] w-full flex flex-col items-center">
          <h5 className="bg-[#FF3811] w-[300px] py-4 mb-2 font-semibold cursor-pointer text-center">
            Full Car Repair
          </h5>
          <h5 className="bg-white w-[300px] py-4 mb-2 cursor-pointer hover:bg-[#FF3811] text-center">Engine Repair</h5>
          <h5 className="bg-white w-[300px] py-4 mb-2 cursor-pointer hover:bg-[#FF3811] text-center">Automatic Services</h5>
          <h5 className="bg-white w-[300px] py-4 mb-2 cursor-pointer hover:bg-[#FF3811] text-center">Engine Oil Change</h5>
          <h5 className="bg-white w-[300px] py-4 cursor-pointer hover:bg-[#FF3811] text-center">Battery Charge</h5>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;



