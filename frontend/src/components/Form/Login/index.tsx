import React, { useState } from 'react';
import './_index.scss';

import { useNavigate } from 'react-router-dom';

import Input from './../Input';
import emailIcon from './../../../assets/icon/email.svg';
import keyIcon from './../../../assets/icon/key.png';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

interface IUserCredential {
  email: string;
  password: string;
}

const index = () => {
  const { userCredential, setUserCredential }:any = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { setSession } = useAuth();
  const handleSubmit = async () => {
    const { token, data } = await axios.post(
      'http://127.0.0.1:8000/api/v1/login',
      {}
    );
  };
  return (
    <div className="form-login-container">
      <form className="form-login" onSubmit={handleSubmit}>
        <h1 className="form-login-title">
          Welcome to <span>TodoList</span>
        </h1>
        <div className="input-field">
          <Input
            placeholder="Please enter your email"
            name="email"
            label="Email"
            icon={emailIcon}
          />
          <Input
            placeholder="Please enter your password"
            name="password"
            type="password"
            label="password"
            icon={keyIcon}
          />
        </div>
        <div className="remember-forget-password">
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="forget-password">Forget password?</div>
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <div className="go-signup">
          <p>Don't have account?</p>
          <p className="register" onClick={() => navigate('/signup')}>
            Register
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
