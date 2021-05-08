import { FC, FormEventHandler } from 'react';
import './PrivacyForm.styles.css';

interface IPrivacyFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const PrivacyForm: FC<IPrivacyFormProps> = ({ handleSubmit }) => {
  return (
    <div className="privacyform-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="updates">
          Receive updates about Tray.io product by email
        </label>
        <input type="checkbox" name="updates" id="updates" />
        <label htmlFor="communication">
          Receive communication by email for other products created by the
          Tray.io team
        </label>
        <input type="checkbox" name="communication" id="communication" />
      </form>
    </div>
  );
};

export default PrivacyForm;
