import React, { useState } from 'react';
import './css/registrationPage.css';
import { register } from '../../../api/authApi'; // Импорт функции из API
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    repeatedPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    if (formData.username.trim().length < 3) {
      notifyError('Имя пользователя должно содержать не менее 3 символов.');
      return false;
    }
    if (formData.password.length < 6) {
      notifyError('Пароль должен содержать не менее 6 символов.');
      return false;
    }
    if (formData.password !== formData.repeatedPassword) {
      notifyError('Пароли не совпадают.');
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
      const response = await register(
        formData.email,
        formData.username,
        formData.password,
        formData.repeatedPassword
      );
      toast.success('Регистрация успешна! Теперь вы можете войти.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        window.location.href = '/auth';
      }, 5000);
    } catch (err: any) {
      if (err.message.includes('Unexpected end of JSON input')) {
        notifyError('Сервер временно недоступен. Пожалуйста, попробуйте позже.');
      } else if (err.message.includes('400')) {
        notifyError('Проверьте правильность введённых данных.');
      } else if (err.message.includes('500')) {
        notifyError('Ошибка сервера. Попробуйте позже.');
      } else {
        notifyError('Произошла неизвестная ошибка. Попробуйте позже.');
      }
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

        {/* Кнопка регистрации через Google */}
        <button className="google-login-button">
          <img
            src="../../../../../public/objectImage/Google__G__logo.png"
            alt="Google"
            className="google-icon"
          />
          Регистрация через Google
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
            placeholder="Email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="input-with-icon"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="repeatedPassword"
              placeholder="Repeated Password"
              className="input-with-icon"
              value={formData.repeatedPassword}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Регистрация...' : 'Регистрация'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
