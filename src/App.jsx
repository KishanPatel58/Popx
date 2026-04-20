import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">

        {/* App Container */}
        <div className="
          w-full 
          max-w-[375px] 
          h-screen 
          bg-white 
          sm:h-[90vh] 
          sm:rounded-xl 
          shadow-md 
          overflow-hidden
        ">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App