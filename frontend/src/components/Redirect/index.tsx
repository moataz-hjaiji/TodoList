import React from 'react';
import { Navigate } from 'react-router-dom';

const index = ({ to }: any) => {
  return <Navigate to={to} />;
};

export default index;
