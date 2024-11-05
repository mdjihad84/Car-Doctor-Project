import FooterImg from "../../assets/images/banner/Group 2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-[#151515] text-base-content p-10 flex flex-col md:flex-row justify-between items-baseline">
        <aside className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img src={FooterImg} alt="Footer Logo" className="w-40 mb-4" />
          <p className="w-[255px] text-base font-normal text-[#E8E8E8] leading-6 text-center md:text-left">
            Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl" />
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 text-2xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-2xl" />
          </div>
        </aside>
        <nav className="mb-6 md:mb-0">
          <h6 className="font-bold text-white text-xl mb-4">About</h6>
          <a className="link link-hover text-[#F3F3F3] text-base">Branding</a>
          <a className="link link-hover text-[#F3F3F3] text-base">Design</a>
          <a className="link link-hover text-[#F3F3F3] text-base">Marketing</a>
        </nav>
        <nav className="mb-6 md:mb-0">
          <h6 className="font-bold text-white text-xl mb-4">Company</h6>
          <a className="link link-hover text-[#F3F3F3] text-base">About us</a>
          <a className="link link-hover text-[#F3F3F3] text-base">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-white text-xl mb-4">Support</h6>
          <a className="link link-hover text-[#F3F3F3] text-base">Terms of use</a>
          <a className="link link-hover text-[#F3F3F3] text-base">Privacy policy</a>
          <a className="link link-hover text-[#F3F3F3] text-base">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

