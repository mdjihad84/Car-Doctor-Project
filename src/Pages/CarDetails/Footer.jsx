import FooterImg from "../../assets/images/banner/Group 2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-[#151515] text-base-content">
      <footer className="footer p-6 md:p-10 lg:p-20 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        
        <aside className="flex flex-col items-center md:items-start space-y-4">
          <img src={FooterImg} alt="Footer Logo" className="w-32 md:w-40" />
          <p className="text-center md:text-left text-[#E8E8E8] text-sm md:text-base w-[90%] md:w-[255px] leading-6">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial entrepreneur.
          </p>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-xl md:text-2xl" aria-label="Facebook" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-xl md:text-2xl" aria-label="Twitter" />
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-xl md:text-2xl" aria-label="LinkedIn" />
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl md:text-2xl" aria-label="Instagram" />
          </div>
        </aside>
        
        <nav className="text-center md:text-left space-y-2">
          <h6 className="font-bold text-white text-lg md:text-xl">About</h6>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Branding</a>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Design</a>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Marketing</a>
        </nav>

        <nav className="text-center md:text-left space-y-2">
          <h6 className="font-bold text-white text-lg md:text-xl">Company</h6>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">About us</a>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Contact</a>
        </nav>

        <nav className="text-center md:text-left space-y-2">
          <h6 className="font-bold text-white text-lg md:text-xl">Support</h6>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Terms of use</a>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Privacy policy</a>
          <a className="link link-hover text-[#F3F3F3] text-sm md:text-base hover:text-white">Cookie policy</a>
        </nav>

      </footer>
    </div>
  );
};

export default Footer;


