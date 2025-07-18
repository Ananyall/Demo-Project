import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const [showOTP, setShowOTP] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@example.com" && password === "123456") {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleSendOTP = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  const handleSignInClick = () => {
    alert("Sign In button clicked!");
  };

  return (
    <div className="login-container">
      <div className="background-overlay"></div>
      <div className="login-box">
        <div className="dot left-dot"></div>
        <div className="dot right-dot"></div>

        <h1 className="welcome-text">WELCOME TO</h1>
        <h2 className="brand-name">TRENDY KATTA</h2>
        <p className="tagline">Because Every Gift Tells a Story...</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="login-button">Login</button>
            <button type="button" className="signin-button" onClick={handleSignInClick}>Sign In</button>
          </div>

          <div className="forgot-password">
            <a href="#" onClick={(e) => { e.preventDefault(); setShowOTP(true); }}>Forgot password?</a>
          </div>
        </form>

        {showOTP && (
          <div className="otp-modal">
            <p>We will send an OTP to your registered email</p>
            <button onClick={handleSendOTP} className="send-otp-button">Send OTP</button>
          </div>
        )}
      </div>
    </div>
  );
}