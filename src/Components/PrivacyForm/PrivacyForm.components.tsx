import { FC, FormEventHandler } from 'react';
import './PrivacyForm.styles.css';

interface IPrivacyFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: FormEventHandler<HTMLFormElement>;
  isValid: boolean;
}

const PrivacyForm: FC<IPrivacyFormProps> = ({
  handleSubmit,
  handleChange,
  isValid,
}) => {
  return (
    <div className="privacyform-container">
      <form onSubmit={handleSubmit}>
        <div className="checkbox">
          <input type="checkbox" name="updates" id="updates" />
          <div className="checkbox-text">
            Receive updates about Tray.io product by email
          </div>
        </div>
        <div className="checkbox">
          <input type="checkbox" name="communication" id="communication" />
          <div className="checkbox-text">
            Receive communication by email for other products created by the
            Tray.io team
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrivacyForm;
