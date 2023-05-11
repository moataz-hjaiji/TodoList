import React, { useEffect } from 'react';
import './_index.scss';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

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
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <div className="form-login-container">
      <form className="form-login" onSubmit={formik.handleSubmit}>
        <h1 className="form-login-title">
          Welcome to <span>TodoList</span>
        </h1>
        <div className="input-field">
          <Input
            placeholder="Please enter your email"
            name="email"
            label="Email"
            icon={emailIcon}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Input
            placeholder="Please enter your password"
            name="password"
            type="password"
            label="password"
            icon={keyIcon}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password}
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
