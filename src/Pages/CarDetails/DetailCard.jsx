import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import ManageImg from '../../assets/images/services/4.jpg';
import VectorImg from '../../assets/images/team/Vector (4).png';
import VectorImg1 from '../../assets/images/team/Vector (5).png';

const ComponentName = () => {
  // State for the dropdown button text and toggling
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  return (
    <div className="mb-10 px-4 md:px-8 lg:px-12">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex flex-col md:flex-row justify-around items-center my-10">
          <div className="flex w-full md:w-[335px] h-[150px] justify-center items-center mb-4 md:mb-0">
            <div className="w-[40px] h-[40px] bg-[#444444] rounded-full flex justify-center items-center cursor-pointer">
              <i className="fa-solid fa-xmark text-white"></i>
            </div>
            <img className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] rounded-[10px] ml-3" src={ManageImg} alt="Product" />
            <div className="pl-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#444444] leading-[25px] md:leading-[30px]">Martha Knit Top</h3>
              <p className="text-[#A2A2A2] text-sm md:text-base w-[95px] leading-[25px] md:leading-[30px]">Color : Green Size: S</p>
            </div>
          </div>
          <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
            <p className="text-[#444444] text-base md:text-xl font-medium">info@gmail.com</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
            <p className="text-[#2D2D2D] text-base md:text-xl font-medium">22-10-2022</p>
          </div>
          <div className="relative w-full md:w-auto text-center md:text-left">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full rounded-[10px] md:w-[160px] h-[48px] text-base md:text-xl font-semibold border border-[#FF3811] bg-[#FF3811] text-white flex justify-center items-center"
            >
              {dropdownIndex === index ? 'Confirmed' : 'Pending'}
              <HiChevronDown className="ml-2" />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <div className="flex">
            <img src={VectorImg} alt="" />
            <p className='pl-3'>Continue Shopping</p>
        </div>
        <div className="flex">
            <img src={VectorImg1} alt="" />
            <p className='pl-3'>Clear Shopping Cart</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;

