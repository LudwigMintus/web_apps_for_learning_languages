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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notifyError = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const validateInputs = (): boolean => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }

    setLoading(true);
    try {
      const data = await login(formData.email, formData.password);
      toast.success('Вы успешно вошли!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    } catch (err: any) {
      notifyError('Ошибка входа. Проверьте введенные данные.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
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
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Username or email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="input-wrapper">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-with-icon"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
