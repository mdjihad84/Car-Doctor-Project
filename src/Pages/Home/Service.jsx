import SectionTitle from "../../Components/SectionTitle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from '../../../public/menu.json';

const ShefPage = () => {
    return (
        <div className="mb-20">
            {/* Section Title */}
            <SectionTitle subtitle="Service" title="Our Service Area" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "/>
            {/* Card Section */}
            <div className="grid grid-cols-3 gap-4 sm:flex-row justify-center gap-10">
                {Menu.slice(0, 6).map((card) => (
                    <div key={card.id} className="card w-full max-w-[364px] h-[348px] bg-[#F3F3F3] mx-auto">
                        <img src={card.image} className="w-full h-[300px] object-cover" alt={card.name} />
                        <div className="card-body">
                            <h2 className="card-title text-black font-semibold text-2xl">{card.title}</h2>
                            <h5 className="text-[#444444] font-bold text-[25px] mt-[-25px]">{card.description}</h5>
                            <p className="text-xl font-semibold text-[#FF3811]">Price : $20.00</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                        <div className="">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShefPage;
