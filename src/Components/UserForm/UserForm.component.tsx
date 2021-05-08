import { ChangeEventHandler, FC, FormEvent, FormEventHandler } from 'react';
import './UserForm.styles.css';

import { Button } from '../../Elements';

interface IUserFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  isValid: boolean;
  formData: IFormData;
}

interface IFormData {
  name: string;
  role: string;
  email: string;
  password: string;
}

const UserForm: FC<IUserFormProps> = ({
  handleSubmit,
  handleChange,
  isValid,
  formData,
}) => {
  return (
    <div className="userform-container">
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />

          <label htmlFor="role">Role</label>
          <input
            id="role"
            type="text"
            placeholder="Role"
            onChange={handleChange}
            value={formData.role}
          />

          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />

          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <Button isValid={isValid} buttonText="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
