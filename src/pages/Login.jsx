import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingInput = ({ label, type = "text" }) => {
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
      </label>

    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="!px-6 !pt-8">

      <h1 className="text-[22px] font-bold text-gray-800 !mb-2">
        Signin to your PopX account
      </h1>

      <p className="text-gray-400 text-sm !mb-6">
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      {/* Floating Inputs */}
      <FloatingInput label="Email Address" type="email" />
      <FloatingInput label="Password" type="password" />

      <button
        onClick={() => navigate("/account")}
        className="w-full !py-3 rounded-md bg-gray-300 text-white font-medium"
      >
        Login
      </button>

    </div>
  );
};

export default Login;