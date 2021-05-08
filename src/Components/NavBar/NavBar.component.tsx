import { FC } from 'react';
import './NavBar.styles.css';

import logo from '../../Assets/tray_logo.png';

const NavBar: FC = () => {
  return (
    <div className="navbar-container">
      <img src={logo} alt="Tray Logo" className="logo" />
    </div>
  );
};

export default NavBar;
