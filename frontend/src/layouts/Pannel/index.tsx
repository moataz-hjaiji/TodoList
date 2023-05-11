import React, { useState } from 'react';
import './_index.scss';

import NavbarPannel from './../../components/NavbarPannel';

import navbarHamburger from './../../assets/icon/Ovals.svg';
import logo from './../../assets/icon/logo.svg';
import tasksIcon from './../../assets/icon/Icon(1).svg';
import userIcon from './../../assets/icon/Icon(2).svg';
import calenderIcon from './../../assets/icon/Icon(3).svg';
import staticIcon from './../../assets/icon/Icon(4).svg';
import uploadIcon from './../../assets/icon/Icon(5).svg';
import mapIcon from './../../assets/icon/Icon(6).svg';
import settingsIcon from './../../assets/icon/Icon(7).svg';

const index = () => {
  const [showFullPanel, setShowFullPanel] = useState<boolean>();
  return (
    <div className={`pannel  ${showFullPanel && 'fillwith'}`}>
      <div className="sidebar flex-column">
        <button
          className="hamburger-navabr"
          onClick={() => setShowFullPanel(!showFullPanel)}
        >
          <img src={navbarHamburger} alt="navbar humburger" />
        </button>
        <button className="logo">
          <img src={logo} alt="logo website" />
        </button>
        <div className="section-dashboard flex-column">
          <img
            src={tasksIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
          <img
            src={userIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
          <img
            src={calenderIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
          <img
            src={staticIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
          <img
            src={uploadIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
          <img
            src={mapIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
          <img
            src={settingsIcon}
            alt="icon dashboard section"
            className="section-dashboard-icon"
          />
        </div>
      </div>
      {showFullPanel && <NavbarPannel />}
    </div>
  );
};

export default index;
