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
        <div className="flex items-center justify-center w-[1140px] h-[600px] bg-[#F3F3F3]">
            <div className="flex flex-col items-center mt-4">
                <form className="flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <div className="flex w-[946px] mb-4">
                            <input
                                type="email"
                                placeholder="Type here"
                                className="w-[461px] h-[60px] p-4 text-base bg-white border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-[461px] h-[60px] p-4 text-base bg-white border rounded-md ml-2"
                            />
                        </div>

                        <div className="flex w-[946px] mb-2 my-3">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                readOnly
                                className="w-[461px] h-[60px] p-4 text-base bg-white border rounded-md"
                            />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                readOnly
                                className="w-[461px] h-[60px] p-4 text-base bg-white border rounded-md ml-2"
                            />
                        </div>

                        <textarea
                            className="bg-[#FFFFFF] w-[946px] h-[250px] mb-4 p-4 mt-3 border rounded-md"
                            placeholder="Additional Information"
                        ></textarea>
                        <button
                            type="button"
                            className="w-[946px] font-bold text-white bg-[#FF3811] p-4 rounded-md"
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
