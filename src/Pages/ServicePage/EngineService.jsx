import CardIcon from "../../assets/images/team/Frame (2).png";
import ServiceImg from "../../assets/images/banner/Group 2.png";



const EngineService = () => {
    return (
        <div className="flex">
            <div className="">
                <p className="w-[752px] text-[#737373] font-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <div className="flex gap-3">
                    <div className="">
                        <div className="w-[364px] h-[204] bg-[#F3F3F3] flex justify-center py-4 rounded-[10px] border border-t-[#FF3811] border-2 mb-3">
                            <div className="w-[228px] h-[124px]">
                                <h4 className="text-xl text-[#444444] font-bold">Instant Car Services</h4>
                                <p className="text-base text-[#737373] mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="w-[364px] h-[204] bg-[#F3F3F3] flex justify-center py-4 rounded-[10px] border border-t-[#FF3811] border-2">
                            <div className="w-[228px] h-[124px]">
                                <h4 className="text-xl text-[#444444] font-bold">Instant Car Services</h4>
                                <p className="text-base text-[#737373] mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-[364px] h-[204] bg-[#F3F3F3] flex justify-center py-4 rounded-[10px] border border-t-[#FF3811] border-2 mb-3">
                            <div className="w-[228px] h-[124px]">
                                <h4 className="text-xl text-[#444444] font-bold">Instant Car Services</h4>
                                <p className="text-base text-[#737373] mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className="w-[364px] h-[204] bg-[#F3F3F3] flex justify-center py-4 rounded-[10px] border border-t-[#FF3811] border-2">
                            <div className="w-[228px] h-[124px]">
                                <h4 className="text-xl text-[#444444] font-bold">Instant Car Services</h4>
                                <p className="text-base text-[#737373] mt-2">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="w-[752px] text-[#737373] font-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
            </div>

            <div className="">
                <div className="w-[364px] h-[262px] bg-[#151515] flex justify-center py-4 rounded-[10px]">
                    <div className="w-[228px] h-[124px]">
                        <h4 className="text-[25px] text-white font-bold">Download</h4>
                        <div className="flex mt-6">
                            <img className="w-[30px] h-[30px]" src={CardIcon} alt="" />
                            <div className="flex">
                                <div className="px-6">
                                    <h5>Our Brochure</h5>
                                    <p>Download</p>
                                </div>
                                <div className="w-14 h-14 bg-[#FF3811] flex justify-center items-center">
                                  <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <img className="w-[30px] h-[30px]" src={CardIcon} alt="" />
                            <div className="flex">
                                <div className="px-6">
                                    <h5>Our Brochure</h5>
                                    <p>Download</p>
                                </div>
                                <div className="w-14 h-14 bg-[#FF3811] flex justify-center items-center">
                                  <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4 w-[364px] h-[489px] bg-[#151515] flex justify-center py-4 rounded-[10px]">
                    <div className="w-[228px] h-[124px]">
                        <img className="ml-14" src={ServiceImg} alt="" />
                        <div className="flex mt-6 w-[260px] text-center">
                            <p className="font-bold text-xl text-white">Need Help? We Are HereTo Help You</p>                 
                        </div>
                        <div className="w-[270px] h-[126px] bg-white text-center mt-8">
                            <h4 className="font-bold text-xl"><span className="text-[#FF3811]">Car Doctor</span> Special</h4>
                            <p className="font-bold text-base">Save up to <span className="text-[#FF3811]">60% off</span></p>
                            <button className="w-[170px] h-[57px] bg-[#FF3811] text-white mt-[45px]" type="btn">Get A Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineService;