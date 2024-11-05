const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="my-8 w-[605px] m-auto text-center">
      <p className="text-lg text-[#FF3811]">
        ---{subtitle}---
      </p>
      <h4 className="text-[45px] text-black font-bold">
        {title}
      </h4>
      <p className="text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;

