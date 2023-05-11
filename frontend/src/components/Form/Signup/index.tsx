import React from 'react';
import './_index.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from './../Input';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const index = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Must be b 2 characters or above')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Must be b 2 characters or above')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'must be 8 charactere or above')
        .required('required'),
      passwordConfirm: Yup.string()
        .required('required')
        .oneOf([Yup.ref('password')]),
    }),
    onSubmit: (values) => {
      const { firstName, lastName, email, password, passwordConfirm } = values;
      register(firstName, lastName, email, password, passwordConfirm);
      navigate('/login');
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="sign-form flex-column">
      <Input
        placeholder="Enter your first name"
        name="firstName"
        type="text"
        label="First Name"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.errors.firstName}
      />
      <Input
        placeholder="Enter your last name"
        name="lastName"
        type="text"
        label="Last Name"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.errors.lastName}
      />
      <Input
        placeholder="Enter your Email"
        name="email"
        type="email"
        label="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Input
        placeholder="Enter your password"
        name="password"
        type="password"
        label="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Input
        placeholder="Confirm your password"
        name="passwordConfirm"
        type="passwordConfirm"
        label="passwordConfirm"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirm}
        error={formik.errors.passwordConfirm}
      />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default index;
