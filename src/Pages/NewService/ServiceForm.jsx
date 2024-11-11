import { useState } from 'react';
import Swal from 'sweetalert2';

const ServiceForm = () => {
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleOrderConfirm = () => {
        if (!email1 || !email2 || !password1 || !password2 || !additionalInfo) {
            Swal.fire({
                title: 'Missing Information',
                text: 'Please fill out all fields before confirming the order.',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF3811',
            });
        } else {
            Swal.fire({
                title: 'Order Confirmed!',
                text: 'Your order has been successfully confirmed.',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#FF3811',
            });
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#F3F3F3] p-4 md:p-8">
            <div className="flex flex-col items-center mt-4 w-full max-w-[1140px]">
                <form className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col md:flex-row w-full max-w-[946px] mb-4 space-y-4 md:space-y-0 md:space-x-2">
                            <input
                                type="email"
                                placeholder="Type here"
                                className="w-full md:w-[461px] h-[60px] p-4 text-base bg-white border rounded-md"
                                value={email1}
                                onChange={(e) => setEmail1(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="w-full md:w-[461px] h-[60px] p-4 text-base bg-white border rounded-md"
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row w-full max-w-[946px] mb-4 space-y-4 md:space-y-0 md:space-x-2">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full md:w-[461px] h-[60px] p-4 text-base bg-white border rounded-md"
                                value={password1}
                                onChange={(e) => setPassword1(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full md:w-[461px] h-[60px] p-4 text-base bg-white border rounded-md"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                        </div>

                        <textarea
                            className="w-full max-w-[946px] h-[250px] mb-4 p-4 bg-white border rounded-md resize-none"
                            placeholder="Additional Information"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                        ></textarea>
                        <button
                            type="button"
                            className="w-full max-w-[946px] font-bold text-white bg-[#FF3811] p-4 rounded-md"
                            onClick={handleOrderConfirm}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceForm;


