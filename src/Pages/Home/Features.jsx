import SectionTitle from "../../Components/SectionTitle";
import FeturedImg1 from "../../assets/images/team/Group 71.svg";
import FeturedImg2 from "../../assets/images/team/Group 38729.svg";
import FeturedImg3 from "../../assets/images/team/Group 38730.svg";
import FeturedImg4 from "../../assets/images/team/Wrench.svg";
import FeturedImg5 from "../../assets/images/team/Group 38731.svg";

const features = [
  { title: "Expert Team", img: FeturedImg1 },
  { title: "Expert Team", img: FeturedImg4 },
  { title: "Expert Team", img: FeturedImg3 },
  { title: "Expert Team", img: FeturedImg4 },
  { title: "Expert Team", img: FeturedImg5 },
  { title: "Expert Team", img: FeturedImg5 },
];

const Featured= () => {
  return (
    <div className="my-20">
      <SectionTitle
        subtitle="Core Features"
        title="Why Choose Us"
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <div className="flex justify-center gap-5 flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-solid border-gray-300 w-[152px] h-[157px] flex flex-col items-center justify-center hover:border-[3px] hover:border-blue-500"
          >
            <img src={feature.img} alt="Feature Image" className="mb-4" />
            <div className="text-center">
              <h3 className="font-bold text-lg">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
