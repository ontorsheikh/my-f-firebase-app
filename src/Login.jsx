import React, { useState } from "react";
// Loading.jsx import করলেই spinner কাজ করবে, এখন বাদ দিয়েছি
import "./Login.css";


const Login = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(""); // backend message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: phoneOrEmail,
          password: password,
        }),
      });

      const data = await res.json();
      setMsg(data.message); // backend থেকে message দেখাবে
    } catch (error) {
      console.log(error);
      setMsg("Something went wrong");
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

              {/* Button নাম Log in, কিন্তু signup হবে */}
              <button type="submit" className="login-btn">
                Log in
              </button>
            </form>

            <p>{msg}</p> {/* backend message */}

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
