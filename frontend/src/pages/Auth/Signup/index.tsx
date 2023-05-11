import React from 'react';
import './_index.scss';
import { SignupForm } from '../../../components/Form';

const index = () => {
  return (
    <div className="signup-page">
      <div className="img-signup"></div>
      <div className="signup-form-container">
        <h1 className="signup-title">Create Account</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default index;
