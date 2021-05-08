import { FC } from 'react';
import './NavBar.styles.css';

const NavBar: FC = () => {
  return (
    <div className="navbar-container">
      <img
        src={require('../../Assets/tray_logo.png')}
        alt="Tray Logo"
        className="logo"
      />
    </div>
  );
};

export default NavBar;
