import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';

import { TextField } from '@mui/material';
import { useFormik } from 'formik';

import './_index.scss';
const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirm: '',
};
const SignupForm = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log('A');
      setValues({ ...values });
      const newUser = await axios.post('http://127.0.0.1:8000/api/v1/signup', {
        ...values,
      });
      console.log(newUser);
      navigate('/login');
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'must be 15 caratere or less')
        .min(2, 'must be 2 charatere or above')
        .required('required'),
      lastName: Yup.string()
        .max(15, 'must be 15 caratere or less')
        .min(2, 'must be 2 charatere or above')
        .required('required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Please enter your password.')
        .min(8, 'Your password is too short.'),
      passwordConfirm: Yup.string()
        .required('Please retype your password.')
        .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
    }),
  });
  return (
    <form className="signup-form" onSubmit={formik.handleSubmit}>
      <div className="filed-form">
        <label htmlFor="firstName">first name:</label>
        <TextField
          id="firstName"
          label="firstName"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </div>
      <div className="filed-form">
        <label htmlFor="lastName">last name:</label>
        <TextField
          id="lastName"
          label="lastName"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </div>
      <div className="filed-form">
        <label htmlFor="email">Email:</label>
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
      <div className="filed-form">
        <label htmlFor="password">password:</label>
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
      <div className="filed-form">
        <label htmlFor="passwordConfirm">passwordConfirm:</label>
        <TextField
          id="passwordConfirm"
          label="passwordConfirm"
          type="password"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          error={
            formik.touched.passwordConfirm &&
            Boolean(formik.errors.passwordConfirm)
          }
          helperText={
            formik.touched.passwordConfirm && formik.errors.passwordConfirm
          }
        />
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default SignupForm;
