import React from 'react';
import './css/authPage.css';
import bgImage from '../../../../../public/objectImage/registration.png';


const AuthPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Логотип */}
        <div className="logo-container">
          <div className="logo"></div>
        </div>

        {/* Кнопка входа через Google */}
        <button className="google-login-button">
          <img
            src="../../../../../public/objectImage/Google__G__logo.png"
            alt="Google"
            className="google-icon"
          />
          Вход через аккаунт Google
        </button>

        {/* Разделитель */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Форма */}
        <form className="auth-form">
          <input
            type="text"
            placeholder="Username or email"
            className="input"
          />
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-with-icon"
            />
          </div>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
