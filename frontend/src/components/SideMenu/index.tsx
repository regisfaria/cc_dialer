import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiLayers,
  FiUsers,
  FiFileText,
  FiBookOpen,
  FiUserPlus,
  FiUser,
} from 'react-icons/fi';

import myPicture from '../../assets/profile-assets/me.jpeg';
import logoImg from '../../assets/cc-logo.png';

import { SideMenuBox, MenuOption, MenuHeader, Footer } from './styles';

const SideMenu: React.FC = () => {
  return (
    <SideMenuBox>
      <MenuHeader>
        <img src={logoImg} alt="Complete Compliance" />
      </MenuHeader>
      <MenuOption>
        <Link to="/profile">
          <img src={myPicture} alt="" />
          <div id="profile">
            <strong>Régis Faria</strong>
            <p>
              <FiUser size={16} />
              Profile
            </p>
          </div>
        </Link>

        <Link to="/leads">
          <div id="option">
            <FiLayers size={16} />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link to="/leads">
          <div id="option">
            <FiUsers size={16} />
            <p>Leads</p>
          </div>
        </Link>

        <Link to="/tasks">
          <div id="option">
            <FiFileText size={16} />
            <p>Tasks</p>
          </div>
        </Link>

        <Link to="/history">
          <div id="option">
            <FiBookOpen size={16} />
            <p>History</p>
          </div>
        </Link>

        <Link to="/register">
          <div id="option">
            <FiUserPlus size={16} />
            <p>Register</p>
          </div>
        </Link>
      </MenuOption>

      <Footer>
        <p>
          Complete Compliance © developed by
          <a
            href="https://github.com/regisfaria"
            rel="noopener noreferrer"
            target="_blank"
          >
            Régis Faria
          </a>
        </p>
      </Footer>
    </SideMenuBox>
  );
};

export default SideMenu;
