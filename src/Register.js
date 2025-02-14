import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [registerData, setRegisterData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [registerErrors, setRegisterErrors] = useState({
    emailError: null,
    fullNameError: null,
    usernameError: null,
    passwordError: null,
    confirmPasswordError: null,
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });

    if (name === "email") {
      setRegisterErrors({
        ...registerErrors,
        emailError:
          value.length === 0
            ? "Email is required"
            : !validateEmail(value) && "Invalid email format",
      });
    } else if (name === "fullName") {
      setRegisterErrors({
        ...registerErrors,
        fullNameError: value.length === 0 ? "Full Name is required" : null,
      });
    } else if (name === "username") {
      setRegisterErrors({
        ...registerErrors,
        usernameError:
          value.length === 0
            ? "Username is required"
            : value.includes(" ") && "Username cannot contain spaces",
      });
    } else if (name === "password") {
      setRegisterErrors({
        ...registerErrors,
        passwordError:
          value.length === 0
            ? "Password is required"
            : !validatePassword(value) &&
              "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
      });
    } else if (name === "confirmPassword") {
      setRegisterErrors({
        ...registerErrors,
        confirmPasswordError:
          value.length === 0
            ? "Confirm Password is required"
            : value !== registerData.password && "Passwords do not match",
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(registerErrors).some((error) => error);
    if (!hasErrors) {
      console.log("Register Submitted", registerData);
    }
  };
  return (
    <div className="register">
      <div className="register-container">
        <h1>Create Account</h1>
        <form onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={registerData.fullName}
              onChange={handleData}
              placeholder="Enter your full name"
            />
            {registerErrors.fullNameError && (
              <div className="error-message">
                {registerErrors.fullNameError}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={registerData.email}
              onChange={handleData}
              placeholder="Enter your email"
            />
            {registerErrors.emailError && (
              <div className="error-message">{registerErrors.emailError}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={registerData.username}
              onChange={handleData}
              placeholder="Enter your username"
            />
            {registerErrors.usernameError && (
              <div className="error-message">
                {registerErrors.usernameError}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registerData.password}
              onChange={handleData}
              placeholder="Enter your password"
            />
            {registerErrors.passwordError && (
              <div className="error-message">
                {registerErrors.passwordError}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleData}
              placeholder="Confirm your password"
            />
            {registerErrors.confirmPasswordError && (
              <div className="error-message">
                {registerErrors.confirmPasswordError}
              </div>
            )}
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>
        <div className="login-link">
          <a href="/login">Already have an account? Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
