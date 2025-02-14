import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({
    emailError: null,
    passwordError: null,
  });

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleData = (e) => {
    const { name, value } = e.target;

    setTouchedFields((prev) => ({ ...prev, [name]: true }));

    if (name === "email") {
      setLoginData({ ...loginData, email: value });
      setLoginErrors({
        ...loginErrors,
        emailError:
          value.length === 0
            ? "This Field Is Required"
            : !validateEmail(value) && "Invalid Email Format",
      });
    } else if (name === "password") {
      setLoginData({ ...loginData, password: value });
      setLoginErrors({
        ...loginErrors,
        passwordError:
          value.length === 0
            ? "This Field Is Required"
            : value.length < 8 && "Password must be at least 8 characters",
      });
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log("Login Submitted", loginData);
  };

  const isButtonDisabled =
    loginErrors.emailError ||
    loginErrors.passwordError ||
    !loginData.email ||
    !loginData.password;

  return (
    <div className="login">
      <div className="login-container">
        <h1>POP CIMA</h1>

        <form onSubmit={submitData}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className={`${
                touchedFields.email
                  ? loginErrors.emailError
                    ? "invalid-input"
                    : "valid-input"
                  : ""
              }`}
              value={loginData.email}
              onChange={handleData}
              onBlur={() =>
                setTouchedFields((prev) => ({ ...prev, email: true }))
              }
              name="email"
              placeholder="Enter your email"
            />
            {touchedFields.email && (
              <p className="error-text">{loginErrors.emailError}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className={`${
                  touchedFields.password
                    ? loginErrors.passwordError
                      ? "invalid-input"
                      : "valid-input"
                    : ""
                }`}
                value={loginData.password}
                onChange={handleData}
                onBlur={() =>
                  setTouchedFields((prev) => ({ ...prev, password: true }))
                }
                name="password"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {touchedFields.password && (
              <p className="error-text">{loginErrors.passwordError}</p>
            )}
          </div>
          <button
            disabled={isButtonDisabled}
            type="submit"
            className="login-button"
          >
            Login
          </button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
