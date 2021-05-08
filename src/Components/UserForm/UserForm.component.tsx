import { FC, FormEventHandler } from 'react';
import './UserForm.styles.css';

interface IUserFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

const UserForm: FC<IUserFormProps> = ({ handleSubmit }) => {
  return (
    <div className="userform-container">
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name" />

          <label htmlFor="role">Role</label>
          <input id="role" type="text" placeholder="Role" />

          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <input id="password" type="text" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
