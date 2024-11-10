import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import ManageImg from '../../assets/images/services/4.jpg';
import ManageImg1 from '../../assets/images/services/5.jpg';
import ManageImg2 from '../../assets/images/services/6.jpg';

const Manage = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const [buttonText, setButtonText] = useState('Approved');

    const toggleDropdown = (index) => {
        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    };

    const handleSelection = (selection) => {
        setButtonText(selection);
        setOpenDropdownIndex(null);
    };
    
    const images = [ManageImg, ManageImg1, ManageImg2];

    return (
        <div className="mb-10 px-4 md:px-8 lg:px-12">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-around items-center my-10">
                    <div className="flex w-full md:w-[335px] h-[150px] justify-center items-center mb-4 md:mb-0">
                        <div className="w-[40px] h-[40px] bg-[#444444] rounded-full flex justify-center items-center cursor-pointer">
                            <i className="fa-solid fa-xmark text-white"></i>
                        </div>
                        <img
                            className="w-[120px] md:w-[150px] h-[120px] md:h-[150px] rounded-[10px] ml-3"
                            src={images[index]} // Use the correct image for each card
                            alt=""
                        />
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
                            onClick={() => toggleDropdown(index)} // Toggle the dropdown visibility based on the index
                            className="w-full md:w-[160px] h-[48px] text-base md:text-xl font-semibold border border-[#29B170] flex justify-center items-center text-[#29B170]"
                        >
                            {buttonText}
                            <HiChevronDown className="ml-2" />
                        </button>
                        {openDropdownIndex === index && ( // Only show the dropdown for the current index
                            <div className="absolute right-0 mt-2 w-full md:w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg">
                                <ul className="py-2">
                                    <li
                                        onClick={() => handleSelection('Approve')}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Approve
                                    </li>
                                    <li
                                        onClick={() => handleSelection('Reject')}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Reject
                                    </li>
                                    <li
                                        onClick={() => handleSelection('Pending')}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        Pending
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Manage;


