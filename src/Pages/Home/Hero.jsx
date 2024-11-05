import HeroImg from "../../assets/images/banner/5.jpg";

const ComponentName = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen h-[600px] rounded-[10px]"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left p-8 bg-black bg-opacity-50">
        <h2 className="text-white text-6xl font-bold mb-4 w-[360px]">
          Affordable Price For Car Servicing
        </h2>
        <p className="text-white mb-6 font-normal text-lg w-[450px]">
          There are many variations of passages of available, but the majority have suffered alteration in some form.
        </p>
        <div className="flex space-x-4 justify-center">
          <button type="button" className="bg-transparent text-white w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] transition duration-300">Latest Project</button>
          <button type="button" className="bg-transparent text-white w-[170px] h-[56px] rounded border border-white hover:bg-[#FF3811] transition duration-300">Latest Project</button>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
