import React, { useState } from 'react';

import './_index.scss';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ButtonMui from '../../../components/Button';
import LoginForm from '../../../components/Form/LogIn';

const LoginPage: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (email: string, password: string) => {
    // If authentication succeeds, set the user's authentication state
    // If authentication fails, display an error message
    try {
      console.log({ email, password });
      const user = await axios
        .post('http://127.0.0.1:8000/api/v1/login', {
          email,
          password,
        })
        .then((response) => response.data)
        .catch((error) => error.response.data);
      if (user.status === 'success') {
        navigate('/');
      } else {
        setError('email or password is invalid');
      }
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default LoginPage;
