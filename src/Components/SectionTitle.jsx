const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="mb-8 mx-auto text-center max-w-[616px] px-4">
      <p className="text-xl text-[#FF3811] font-bold ">
        ---{subtitle}---
      </p>
      <h4 className="text-[36px] md:text-[45px] text-black font-bold my-[14px]">
        {title}
      </h4>
      <p className="text-base md:text-lg mb-[50px]">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;

