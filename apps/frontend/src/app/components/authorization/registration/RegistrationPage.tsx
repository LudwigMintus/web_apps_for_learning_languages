import React from 'react';
import './css/registrationPage.css';
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
          Регистрация через гугл Google
        </button>

        {/* Разделитель */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Форма */}
        <form className="auth-form">
          <input type="text" placeholder="Email" className="input" />
          <input type="text" placeholder="Username" className="input" />
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Password"
              className="input-with-icon"
            />
            <input
              type="password"
              placeholder="Repeated Password"
              className="input-with-icon"
            />
          </div>
          <button type="submit" className="login-button">
            Registration In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
