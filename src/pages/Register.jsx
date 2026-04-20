import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingInput = ({ label, required, type = "text" }) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative !mb-5">

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="
          w-full border border-gray-300 bg-white text-gray-800
          rounded-md !px-3 !pt-5 !pb-2 text-sm
          outline-none focus:border-[#9B6CFD]
        "
      />

      {/* Floating Label */}
      <label
        className={`
          absolute left-3 !px-1 transition-all duration-200 bg-white
          ${focus || value
            ? "-top-2 text-[11px] text-[#9B6CFD]"
            : "top-3 text-sm text-gray-400"}
        `}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="!px-6 !pt-8 !pb-6 flex flex-col h-full">

      <h1 className="text-[22px] font-bold text-gray-800 !mb-6">
        Create your PopX account
      </h1>

      <FloatingInput label="Full Name" required />
      <FloatingInput label="Phone number" required />
      <FloatingInput label="Email address" required />
      <FloatingInput label="Password" type="password" required />
      <FloatingInput label="Company name" />

      <p className="text-sm !mb-2">
        Are you an Agency?<span className="text-red-500">*</span>
      </p>

      <div className="flex gap-6 !mb-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="agency"
            defaultChecked
            className="accent-[#9B6CFD]"
          />
          Yes
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="agency"
            className="accent-[#9B6CFD]"
          />
          No
        </label>
      </div>

      <div className="!mt-auto">
        <button
          onClick={() => navigate("/account")}
          className="
            w-full !py-3 rounded-md text-white font-medium
            bg-gradient-to-r from-purple-600 to-purple-500
          "
        >
          Create Account
        </button>
      </div>

    </div>
  );
};

export default Register;