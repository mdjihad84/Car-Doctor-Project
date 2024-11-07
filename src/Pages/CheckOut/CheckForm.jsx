import React from 'react';
import Swal from 'sweetalert2';

const ComponentName = () => {
    const handleOrderConfirm = () => {
        Swal.fire({
            title: 'Order Confirmed!',
            text: 'Your order has been successfully confirmed.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF3811',
        });
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#F3F3F3] p-4">
            <div className="flex flex-col items-center w-full max-w-[1140px]">
                <form className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col md:flex-row w-full max-w-[946px] mb-4 space-y-4 md:space-y-0 md:space-x-2">
                            <input
                                type="email"
                                placeholder="Type here"
                                className="w-full md:w-[46%] h-[60px] p-4 text-base bg-white border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full md:w-[46%] h-[60px] p-4 text-base bg-white border rounded-md"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row w-full max-w-[946px] mb-4 space-y-4 md:space-y-0 md:space-x-2">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                readOnly
                                className="w-full md:w-[46%] h-[60px] p-4 text-base bg-white border rounded-md"
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                readOnly
                                className="w-full md:w-[46%] h-[60px] p-4 text-base bg-white border rounded-md"
                            />
                        </div>

                        <textarea
                            className="w-full max-w-[946px] h-[200px] mb-4 p-4 bg-white border rounded-md resize-none"
                            placeholder="Additional Information"
                        ></textarea>
                        <button
                            type="button"
                            className="w-full max-w-[946px] font-bold text-white bg-[#FF3811] p-4 rounded-md"
                            onClick={handleOrderConfirm}
                        >
                            Order Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ComponentName;


