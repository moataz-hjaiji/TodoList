import React from 'react';
import ButtonMui from '../../components/Button';

const Home = () => {
  return (
    <div className="home">
      <ButtonMui text="signup" variant="contained" />
      <ButtonMui text="login" variant="contained" />
    </div>
  );
};

export default Home;
