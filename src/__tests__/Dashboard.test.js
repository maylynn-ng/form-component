import React from 'react';
import { Dashboard } from '../Containers';
import { render } from '@testing-library/react';

test('Dashboard should render Sign Up text', () => {
  const { getByText } = render(<Dashboard />);
  const signUpText = getByText('Sign up to stay tuned!');
  expect(signUpText).toBeInTheDocument();
});
