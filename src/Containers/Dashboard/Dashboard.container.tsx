import React, { FC } from 'react';
import './Dashboard.styles.css';

import { UserForm } from '../../Components';

const Dashboard: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <UserForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
