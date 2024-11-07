import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import ManageImg from '../../assets/images/services/4.jpg';

const ComponentName = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Approved');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelection = (selection) => {
        setButtonText(selection);
        setIsDropdownOpen(false);
    };

    return (
        <div className="mb-10 px-4">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-wrap justify-around items-center my-10 space-y-4 lg:space-y-0">
                    <div className="flex items-center w-full lg:w-auto space-x-4">
                        <div className="w-10 h-10 bg-[#444444] rounded-full flex justify-center items-center cursor-pointer">
                            <i className="fa-solid fa-xmark text-white"></i>
                        </div>
                        <img
                            className="w-[150px] h-[150px] rounded-[10px]"
                            src={ManageImg}
                            alt=""
                        />
                        <div className="pl-4">
                            <h3 className="text-lg lg:text-xl font-semibold text-[#444444] leading-[30px]">
                                Martha Knit Top
                            </h3>
                            <p className="text-[#A2A2A2] text-base leading-[30px]">
                                Color : Green Size: S
                            </p>
                        </div>
                    </div>
                    <p className="text-[#444444] text-lg lg:text-xl font-medium text-center lg:text-left">
                        info@gmail.com
                    </p>
                    <p className="text-[#2D2D2D] text-lg lg:text-xl font-medium text-center lg:text-left">
                        22-10-2022
                    </p>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="w-[160px] h-[48px] text-lg lg:text-xl font-semibold border border-[#29B170] flex justify-center items-center text-[#29B170]"
                        >
                            {buttonText}
                            <HiChevronDown className="ml-2" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
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

export default ComponentName;
