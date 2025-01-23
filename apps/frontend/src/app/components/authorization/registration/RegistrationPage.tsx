import React, { useState } from 'react';
import './css/registrationPage.css';
import { register } from '../../../api/authApi';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = () => {
    if (!formData.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      toast.error('Введите корректный email.', { position: 'top-right' });
      return false;
    }
    if (formData.username.trim().length < 3) {
      toast.error('Имя пользователя должно содержать не менее 3 символов.', { position: 'top-right' });
      return false;
    }
    if (formData.password.length < 6) {
      toast.error('Пароль должен содержать не менее 6 символов.', { position: 'top-right' });
      return false;
    }
    if (formData.password !== formData.repeatedPassword) {
      toast.error('Пароли не совпадают.', { position: 'top-right' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    setLoading(true);
    try {
      await register(formData.email, formData.username, formData.password);
      toast.success('Регистрация успешна!', { position: 'top-right' });
      setTimeout(() => {
        window.location.href = '/auth';
      }, 5000);
    } catch (err) {
      toast.error('Ошибка регистрации. Попробуйте позже.', { position: 'top-right' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <ToastContainer />
      <div className="registration-card">
        <div className="registration-logo-container">
          <div className="registration-logo"></div>
        </div>
        <button className="registration-google-login-button">
          <img
            src="../../../../../public/objectImage/Google__G__logo.png"
            alt="Google"
            className="registration-google-icon"
          />
          Регистрация через Google
        </button>
        <div className="registration-divider">
          <span>or</span>
        </div>
        <form className="registration-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="registration-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="registration-input"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="registration-input-with-icon"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="repeatedPassword"
              placeholder="Repeated Password"
              className="registration-input-with-icon"
              value={formData.repeatedPassword}
              onChange={handleChange}
              required
            />
            <span
              className="registration-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
          <button
            type="submit"
            className="registration-login-button"
            disabled={loading}
          >
            {loading ? 'Регистрация...' : 'Регистрация'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
