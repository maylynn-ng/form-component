import React, { FC } from 'react';
import './App.css';

import { Dashboard } from './Containers';
import { NavBar } from './Components';

const App: FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Dashboard />
    </React.Fragment>
  );
};

export default App;
