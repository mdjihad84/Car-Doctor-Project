import SectionTitle from "../../Components/SectionTitle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import StarIcon from "../../assets/images/team/Frame (1).png";
import Menu from '../../../public/menu.json';

const Product = () => {
    return (
        <div className="my-24">
            {/* Section Title */}
            <SectionTitle 
                subtitle="Popular Products" 
                title="Browse Our Products" 
                description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            
            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Menu.slice(7, 13).map((card) => (
                    <div 
                        key={card.id} 
                        className="card w-full max-w-[364px] bg-[#F3F3F3] mx-auto shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                        <img 
                            src={card.image} 
                            className="w-[156px] h-[153px] object-cover mx-auto mt-4" 
                            alt={card.name} 
                        />
                        <div className="card-body flex flex-col justify-between p-4">
                            <div className="flex justify-center mb-2">
                                {Array(5).fill().map((_, i) => (
                                    <img key={i} src={StarIcon} alt="Star icon" className="w-5 h-5 mx-1" />
                                ))}
                            </div>
                            <h2 className="card-title text-black font-semibold text-xl sm:text-2xl text-center">{card.title}</h2>
                            <h5 className="text-[#444444] font-bold text-lg sm:text-xl text-center mt-2">{card.description}</h5>
                            <p className="text-lg sm:text-xl font-semibold text-[#FF3811] text-center mt-2">Price: $20.00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
