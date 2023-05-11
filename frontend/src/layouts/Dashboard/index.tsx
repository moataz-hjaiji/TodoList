import React, { useContext } from 'react';
import './_index.scss';

import Pannel from './../Pannel';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
type Props = {
  children: React.ReactNode;
};
const index = ({ children }: Props) => {
  const { user } = useAuth();
  console.log(useAuth());
  return (
    <div className="dashboard">
      <Pannel />
      <div className="Welcone-dashboard"></div>
      {children}
    </div>
  );
};

export default index;
