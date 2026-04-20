import React from 'react'
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full flex flex-col justify-end !px-6 !pb-8">

            <h1 className="text-[22px] font-bold text-gray-800 !mb-2">
                Welcome to PopX
            </h1>

            <p className="text-gray-400 text-sm !mb-6 leading-5">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
            </p>

            <button
                onClick={() => navigate("/register")}
                className="w-full !py-3 rounded-md text-white font-medium 
        bg-gradient-to-r from-purple-600 to-purple-500 !mb-3"
            >
                Create Account
            </button>

            <button
                onClick={() => navigate("/login")}
                className="w-full !py-3 rounded-md text-gray-800 font-medium 
        bg-purple-200"
            >
                Already Registered? Login
            </button>

        </div>
    );
}

export default Welcome