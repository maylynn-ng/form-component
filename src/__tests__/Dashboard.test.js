import React from 'react';
import { Dashboard } from '../Containers';
import { render } from '@testing-library/react';

describe('Dashboard', () => {
  const component = render(<Dashboard />);
  test('should render Sign Up text', () => {
    const signUpText = component.getByText('Sign up to stay tuned!');
    expect(signUpText).toBeInTheDocument();
  });
});
