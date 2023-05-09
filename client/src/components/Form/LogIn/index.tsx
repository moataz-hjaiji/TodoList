import React from 'react';


import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';

import './_index.scss';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Please enter your password.')
        .min(8, 'Your password is too short.'),
    }),
    onSubmit: (values) => {
      onSubmit(values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <div className="field-form">
        <label>Email:</label>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </div>
      <div className="field-form">
        <label>Password: </label>
        <TextField
          id="password"
          label="password"
          type="password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;

