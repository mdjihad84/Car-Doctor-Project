import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import SectionTitle from "../../Components/SectionTitle";
import TeamImg1 from '../../assets/images/team/1.jpg';
import TeamImg2 from '../../assets/images/team/2.jpg';
import TeamImg3 from '../../assets/images/team/3.jpg';

const ComponentName = () => {
  return (
    <div className="text-center">
      <SectionTitle subtitle="Team" title="Meet Our Team" description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."/>
      <div className="flex gap-6">
        <div className="card w-96 shadow-xl mt-4">
          <figure>
            <img src={TeamImg1} alt="Team Member" />
          </figure>
          <div className="card-body text-center"> 
            <h2 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>
            <div className="flex justify-center space-x-4 mt-2">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl" />
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl" />
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl mt-4">
          <figure>
            <img src={TeamImg2} alt="Team Member" />
          </figure>
          <div className="card-body text-center"> 
            <h2 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>
            <div className="flex justify-center space-x-4 mt-2">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl" />
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl" />
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl mt-4">
          <figure>
            <img src={TeamImg3} alt="Team Member" />
          </figure>
          <div className="card-body text-center"> 
            <h2 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h2>
            <p className="text-xl font-semibold text-[#737373]">Engine Expert</p>
            <div className="flex justify-center space-x-4 mt-2">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl" />
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
