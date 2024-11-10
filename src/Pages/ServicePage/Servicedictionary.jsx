const dictionary = () => {
    return (
        <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-wrap gap-3 my-6 justify-center md:justify-start">
                {Array(3).fill(null).map((_, index) => (
                    <div key={index} className="w-[235px] h-[227px] bg-[#F3F3F3] flex justify-center py-4 rounded-[10px]">
                        <div className="w-[163px] h-[199px] text-center">
                            <div className="my-2 mx-auto w-[83px] h-[83px] bg-[#FF38111A] rounded-full flex items-center justify-center">
                                <div className="w-[55px] h-[55px] bg-[#FF3811] rounded-full flex justify-center items-center">
                                    <h3 className="text-white font-bold text-xl">{`0${index + 1}`}</h3>
                                </div>
                            </div>
                            <h4 className="text-xl text-[#444444] font-bold">Step {index + 1}</h4>
                            <p className="text-base text-[#737373] mt-2 leading-[26px]">It uses a dictionary of over 200.</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lg:ml-[-25px] w-full max-w-[780px] h-auto md:h-[400px] p-6 bg-white rounded-lg">
                <div className="w-full h-64 md:h-full">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/5GZfdjdmMgo"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default dictionary;
