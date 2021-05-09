import { FC } from 'react';
import './Button.styles.css';

interface IButtonProps {
  isValid: boolean;
  buttonText: string;
}

const Button: FC<IButtonProps> = ({ isValid, buttonText }) => {
  return (
    <button type="submit" className={`${isValid ? 'enable' : 'disable'}`}>
      {buttonText}
    </button>
  );
};

export default Button;
