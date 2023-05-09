import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMui from '../../components/Button';

const Home = () => {
  return (
    <div className="home">
      <Link to="/signup">
        <ButtonMui text="signup" variant="contained" />
      </Link>
      <Link to="/login">
        <ButtonMui text="login" variant="contained" />
      </Link>
    </div>
  );
};

export default Home;
