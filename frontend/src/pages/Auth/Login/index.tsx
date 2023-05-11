import React from 'react';
import './_index.scss';
import DesktopImg from './../../../assets/img/Desktop-login.jpg';

import { Login } from './../../../components/Form';

const index = () => {

  return (
    <section className="Login-page">
      <div className="img-login">
      </div>
        <Login />
    </section>
  );
};

export default index;
