import React, { useState } from 'react';
import './css/authPage.css';
import { login } from '../../../api/authApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notifyError = (message) => {
    toast.error(message, { position: 'top-right', autoClose: 3000 });
  };

  const notifySuccess = (message) => {
    toast.success(message, { position: 'top-right', autoClose: 3000 });
  };

  const validateInputs = () => {
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      notifyError('Введите корректный email.');
      return false;
    }
    if (formData.password.trim().length < 6) {
      notifyError('Пароль должен содержать не менее 6 символов.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);
    try {
      // Отправляем запрос на вход
      const response = await login(formData.email, formData.password);

      if (response.token) {
        // Сохраняем токен в localStorage
        localStorage.setItem('token', response.token);

        notifySuccess('Вы успешно вошли!');
        setTimeout(() => {
          window.location.href = '/'; // Перенаправляем на главную
        }, 3000);
      } else {
        notifyError(response.message || 'Ошибка входа. Проверьте введенные данные.');
      }
    } catch (err) {
      notifyError('Ошибка подключения. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-card">
        <div className="auth-logo-container">
          <div className="auth-logo"></div>
        </div>
        <button
          className="auth-google-login-button"
          onClick={() => notifyError('Google OAuth пока не настроен!')}
        >
          <img
            src="../../../../../public/objectImage/Google__G__logo.png"
            alt="Google"
            className="auth-google-icon"
          />
          Вход через аккаунт Google
        </button>
        <div className="auth-divider">
          <span>or</span>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Username or email"
            className="auth-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input-with-icon"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <a href="/forgot-password" className="auth-forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="auth-login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
