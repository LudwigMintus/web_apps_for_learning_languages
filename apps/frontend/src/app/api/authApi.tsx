// authApi.ts
const BASE_URL = 'http://localhost:3000'; // Убедитесь, что базовый URL совпадает с вашим
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Ошибка входа. Проверьте email и пароль.');
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Что-то пошло не так');
  }
};

export const register = async (
  email: string,
  username: string,
  password: string,
  repeatedPassword: string
) => {
  try {
    const response = await fetch('/reg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
        repeatedPassword,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Ошибка регистрации');
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || 'Что-то пошло не так');
  }
};
