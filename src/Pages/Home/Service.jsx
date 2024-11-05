import SectionTitle from "../../Components/SectionTitle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from '../../../public/menu.json';
import { NavLink } from 'react-router-dom';

const Service = () => {
    return (
        <div className="mb-20">
            {/* Section Title */}
            <SectionTitle 
                subtitle="Service" 
                title="Our Service Area" 
                description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            
            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Menu.slice(0, 6).map((card) => (
                    <div key={card.id} className="card w-full max-w-[364px] bg-[#F3F3F3] mx-auto">
                        <img src={card.image} className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover" alt={card.name} />
                        <div className="card-body p-4">
                            <h2 className="card-title text-black font-semibold text-xl sm:text-2xl">{card.title}</h2>
                            <h5 className="text-[#444444] font-bold text-lg sm:text-xl mt-2">{card.description}</h5>
                            <p className="text-lg sm:text-xl font-semibold text-[#FF3811] mt-2">Price: $20.00</p>
                            <div className="flex justify-end mt-4">
                            <NavLink to="/Service">
                                <i className="fa-solid fa-arrow-right text-xl"></i>
                            </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
            <div className="mb-20">
            {/* Your existing SectionTitle and card grid here */}
                <button className="mx-auto w-[170px] h-[56px] rounded border border-[#FF3811] text-[#FF3811] bg-transparent hover:bg-[#FF3811] hover:text-white transition-colors">
                    More Service
                </button>
            </div>
        </div>
    </div>
    );
}

export default Service;
