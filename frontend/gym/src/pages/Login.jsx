import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaDumbbell,
  FaCalendarAlt,
  FaChartLine,
  FaGoogle,
  FaFacebookF,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter your email and password.");
      return;
    }

    console.log("Login Data:", {
      ...formData,
      rememberMe,
    });

    // Add your backend authentication here.
  };

  return (
    <div className="login-page">
      {/* =====================================================
          LOGIN MAIN CONTENT
      ====================================================== */}
      <main className="login-container">

        {/* ===================================================
            LEFT PANEL
        ==================================================== */}
        <section className="login-left">

          <div className="login-left-overlay"></div>

          <div className="login-left-content">

            {/* Heading */}
            <div className="login-welcome">

              <h1>
                Welcome Back!
              </h1>

              <h2>
                Stronger <span>Every Day</span>
              </h2>

              <div className="login-decoration">
                <span></span>
                <FaDumbbell />
                <span></span>
              </div>

              <p>
                Log in to your account and continue your
                fitness journey with us.
              </p>

            </div>

            {/* Features */}
            <div className="login-features">

              {/* Feature 1 */}
              <div className="login-feature">

                <div className="feature-icon">
                  <FaDumbbell />
                </div>

                <div className="feature-content">
                  <h3>Track Workouts</h3>
                  <p>
                    Monitor your progress and performance.
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="login-feature">

                <div className="feature-icon">
                  <FaCalendarAlt />
                </div>

                <div className="feature-content">
                  <h3>Book Sessions</h3>
                  <p>
                    Reserve your training sessions easily.
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
              <div className="login-feature">

                <div className="feature-icon">
                  <FaChartLine />
                </div>

                <div className="feature-content">
                  <h3>Achieve Goals</h3>
                  <p>
                    Stay focused and achieve your goals.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              CREATE ACCOUNT
          ================================================== */}
          <div className="login-create-account">

            <div>
              <h3>New here?</h3>

              <p>
                Create an account and start your journey today!
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/register")}
            >
              <span>Create Account</span>
              <FaArrowRight />
            </button>

          </div>

        </section>


        {/* ===================================================
            RIGHT LOGIN PANEL
        ==================================================== */}
        <section className="login-right">

          <div className="login-form-wrapper">

            {/* Login Icon */}
            <div className="login-icon">
              <FaUser />
            </div>

            {/* Heading */}
            <h2>Login</h2>

            <p className="login-subtitle">
              Enter your credentials to access your account.
            </p>


            {/* =================================================
                LOGIN FORM
            ================================================== */}
            <form
              className="login-form"
              onSubmit={handleSubmit}
            >

              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">

                  <FaEnvelope className="input-icon" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    autoComplete="email"
                  />

                </div>

              </div>


              {/* PASSWORD */}
              <div className="form-group">

                <label htmlFor="password">
                  Password
                </label>

                <div className="input-wrapper">

                  <FaLock className="input-icon" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

              </div>


              {/* REMEMBER + FORGOT */}
              <div className="login-options">

                <label className="remember-label">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                  />

                  <span>
                    Remember me
                  </span>

                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </button>

              </div>


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="login-submit"
              >
                <FaSignInAlt />
                <span>Login</span>
              </button>

            </form>


            {/* =================================================
                OR
            ================================================== */}
            <div className="login-divider">

              <span></span>
              <strong>OR</strong>
              <span></span>

            </div>


            {/* =================================================
                GOOGLE
            ================================================== */}
            <button
              type="button"
              className="social-login google-login"
              onClick={() => console.log("Google Login")}
            >
              <FaGoogle />
              <span>Login with Google</span>
            </button>


            {/* =================================================
                FACEBOOK
            ================================================== */}
            <button
              type="button"
              className="social-login facebook-login"
              onClick={() => console.log("Facebook Login")}
            >
              <FaFacebookF />
              <span>Login with Facebook</span>
            </button>


            {/* SECURITY */}
            <div className="login-security">

              <FaShieldAlt />

              <span>
                Your data is secure and protected with us.
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Login;