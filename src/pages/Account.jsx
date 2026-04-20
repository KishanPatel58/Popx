import React from "react";
import { FaCamera } from "react-icons/fa";

const Account = () => {
    return (
        <div className="h-full bg-white flex flex-col">


            <div className="bg-white !px-6 !py-4 border-b border-gray-200">
                <h2 className="text-sm font-semibold text-gray-700">
                    Account Settings
                </h2>
            </div>


            <div className="flex-1 bg-[#F7F8F9]">


                <div className="bg-[#F7F8F9] !px-6 !py-5 flex items-center gap-4">

                    <div className="relative">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="profile"
                            className="w-14 h-14 rounded-full object-cover"
                        />


                        <div className="
            absolute bottom-0 right-0 
            w-5 h-5 bg-[#6C25FF] 
            rounded-full flex items-center justify-center 
            text-white text-[10px] shadow-md
          ">
                            <FaCamera />
                        </div>
                    </div>

                    {/* User Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                            Marry Doe
                        </h3>
                        <p className="text-xs text-gray-400">
                            Marry@gmail.com
                        </p>
                    </div>
                </div>

                {/* Description */}
                <div className="bg-[#F7F8F9] !px-6 !py-4 text-xs text-gray-500 leading-5 border-t border-dashed border-gray-300">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                    Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
                    Magna Aliquyam Erat, Sed Diam
                </div>

            </div>

        </div>
    );
};

export default Account;