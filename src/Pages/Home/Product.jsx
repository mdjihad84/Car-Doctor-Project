import SectionTitle from "../../Components/SectionTitle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import StarIcon from "../../assets/images/team/Frame (1).png";
import Menu from '../../../public/menu.json';

const ShefPage = () => {
    return (
        <div className="mb-20">
            {/* Section Title */}
            <SectionTitle subtitle="Popular Products" title="Browse Our Products" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "/>
            {/* Card Section */}
            <div className="grid grid-cols-3 gap-4 sm:flex-row justify-center gap-10">
                {Menu.slice(7, 13).map((card) => (
                    <div key={card.id} className="card w-full max-w-[364px] h-[348px] bg-[#F3F3F3] mx-auto shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <img src={card.image} className="w-[156px] h-[153px] object-cover mx-auto mt-4" alt={card.name} />
                    <div className="card-body flex flex-col justify-between p-4">
                    <div className="flex justify-center">
                      <img src={StarIcon} alt="Star icon" />
                      <img src={StarIcon} alt="Star icon" />
                      <img src={StarIcon} alt="Star icon" />
                      <img src={StarIcon} alt="Star icon" />
                      <img src={StarIcon} alt="Star icon" />
                    </div>
                        <h2 className="card-title text-black font-semibold text-2xl">{card.title}</h2>
                        <h5 className="text-[#444444] font-bold text-[20px] ml-[75px]">{card.description}</h5>
                        <p className="text-xl font-semibold text-[#FF3811] ml-[103px]">Price: $20.00</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ShefPage;