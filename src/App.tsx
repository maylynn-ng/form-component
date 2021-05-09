import React, { FC } from 'react';
import './App.css';

import { Dashboard } from './Containers';
import { NavBar, Footer } from './Components';

const App: FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Dashboard />
      <Footer />
    </React.Fragment>
  );
};

export default App;
