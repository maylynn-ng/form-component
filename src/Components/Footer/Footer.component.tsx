import { FC } from 'react';
import './Footer.styles.css';
import trayLogoWhite from '../../Assets/tray_logo_white.png';

const Footer: FC = () => {
  return (
    <div className="footer-container">
      <div className="curve-container">
        <div className="footer-left-curve" />
        <div className="footer-curve"></div>
      </div>
      <img src={trayLogoWhite} alt="Tray Logo" />
    </div>
  );
};

export default Footer;
