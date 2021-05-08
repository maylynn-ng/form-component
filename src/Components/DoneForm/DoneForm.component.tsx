import { FC } from 'react';
import './DoneForm.styles.css';

interface IDoneFormProps {
  isValid: boolean;
}

const DoneForm: FC<IDoneFormProps> = ({ isValid }) => {
  const validTextResponse =
    'Please verify your email address, you should have received an email from us already!';
  const invalidTextResponse = `Seems like you're input for ${'invalid input'} is missing or not quite right`;

  return (
    <div className="doneform-container">
      {isValid ? validTextResponse : invalidTextResponse}
    </div>
  );
};

export default DoneForm;
