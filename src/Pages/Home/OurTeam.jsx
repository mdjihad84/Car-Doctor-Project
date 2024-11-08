import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import SectionTitle from "../../Components/SectionTitle";
import TeamImg1 from '../../assets/images/team/1.jpg';
import TeamImg2 from '../../assets/images/team/2.jpg';
import TeamImg3 from '../../assets/images/team/3.jpg';

const OurTeam = () => {
  return (
    <div className="text-center mb-20">
      <SectionTitle 
        subtitle="Team" 
        title="Meet Our Team" 
        description="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {[TeamImg1, TeamImg2, TeamImg3].map((img, index) => (
          <div 
            key={index} 
            className={`card w-full max-w-sm shadow-xl mt-4 ${
              index === 2 ? "lg:justify-self-end" : ""
            }`}
          >
            <figure>
              <img src={img} alt={`Team Member ${index + 1}`} className="w-full object-cover" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h2>
              <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>

              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl" />
                </a>
              </div>

              {/* Conditionally render the arrow icon only for the third card */}
              {index === 2 && (
                <div className="flex justify-end mt-4">
                  <NavLink to="/Service">
                    <i className="fa-solid fa-arrow-right text-xl text-[#FF3811]"></i>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
