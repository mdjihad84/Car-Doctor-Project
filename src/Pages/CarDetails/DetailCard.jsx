import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import ManageImg from '../../assets/images/services/4.jpg';

const ComponentName = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Approved');  // State to manage button text

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSelection = (selection) => {
        setButtonText(selection); // Change the button text based on selection
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="mb-10">
            <div className="flex justify-around items-center">
                <div className="flex w-[335px] h-[150px] justify-center items-center">
                <div className="w-[40px] h-[40px] bg-[#444444] rounded-full flex justify-center items-center cursor-pointer">
                    <i className="fa-solid fa-xmark text-white"></i>
                </div>
                    <img className='w-[150px] h-[150px] rounded-[10px] ml-3' src={ManageImg} alt="" />
                    <div className="pl-4">
                        <h3 className='text-xl font-semibold text-[#444444] leading-[30px]'>Martha Knit Top</h3>
                        <p className='text-[#A2A2A2] text-base w-[95px] leading-[30px]'>Color : Green Size: S</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-[#444444] text-xl font-medium'>info@gmail.com</p>
                </div>
                <div className="">
                    <p className='text-[#2D2D2D] text-xl font-medium'>22-10-2022</p>
                </div>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className='w-[160px] h-[48px] text-xl font-semibold border border-[#29B170] flex justify-center items-center text-[#29B170]'
                    >
                        {buttonText}
                        <HiChevronDown className='ml-2' />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg">
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
            <div className="flex justify-around items-center my-10">
                <div className="flex w-[335px] h-[150px] justify-center items-center">
                <div className="w-[40px] h-[40px] bg-[#444444] rounded-full flex justify-center items-center cursor-pointer">
                    <i className="fa-solid fa-xmark text-white"></i>
                </div>
                    <img className='w-[150px] h-[150px] rounded-[10px] ml-3' src={ManageImg} alt="" />
                    <div className="pl-4">
                        <h3 className='text-xl font-semibold text-[#444444] leading-[30px]'>Martha Knit Top</h3>
                        <p className='text-[#A2A2A2] text-base w-[95px] leading-[30px]'>Color : Green Size: S</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-[#444444] text-xl font-medium'>info@gmail.com</p>
                </div>
                <div className="">
                    <p className='text-[#2D2D2D] text-xl font-medium'>22-10-2022</p>
                </div>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className='w-[160px] h-[48px] text-xl font-semibold border border-[#29B170] flex justify-center items-center text-[#29B170]'
                    >
                        {buttonText}
                        <HiChevronDown className='ml-2' />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg">
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
            <div className="flex justify-around items-center">
                <div className="flex w-[335px] h-[150px] justify-center items-center">
                <div className="w-[40px] h-[40px] bg-[#444444] rounded-full flex justify-center items-center cursor-pointer">
                    <i className="fa-solid fa-xmark text-white"></i>
                </div>
                    <img className='w-[150px] h-[150px] rounded-[10px] ml-3' src={ManageImg} alt="" />
                    <div className="pl-4">
                        <h3 className='text-xl font-semibold text-[#444444] leading-[30px]'>Martha Knit Top</h3>
                        <p className='text-[#A2A2A2] text-base w-[95px] leading-[30px]'>Color : Green Size: S</p>
                    </div>
                </div>
                <div className="">
                    <p className='text-[#444444] text-xl font-medium'>info@gmail.com</p>
                </div>
                <div className="">
                    <p className='text-[#2D2D2D] text-xl font-medium'>22-10-2022</p>
                </div>
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className='w-[160px] h-[48px] text-xl font-semibold border border-[#29B170] flex justify-center items-center text-[#29B170]'
                    >
                        {buttonText}
                        <HiChevronDown className='ml-2' />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-[160px] bg-white border border-gray-200 rounded-lg shadow-lg">
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
        </div>
    );
};

export default ComponentName;