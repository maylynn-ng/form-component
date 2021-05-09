import React from 'react';
import { UserForm } from '../Components';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockInitialState } from '../__mocks__/forms';

describe('UserForm', () => {
  const mockProps = {
    handleSubmit: jest.fn(),
    setIsValid: jest.fn(),
    setFormData: jest.fn(),
    setPageIndex: jest.fn(),
  };

  test('should render name, role, email and password input fields', () => {
    const component = render(<UserForm {...mockProps} />);
    const name = component.getByText('Name');
    const role = component.getByText('Role');
    const email = component.getByText('Email');
    const password = component.getByText('Password');
    expect(name).toBeInTheDocument();
    expect(role).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  test('should not call setFormData if isValid is false', () => {
    const component = render(<UserForm {...mockProps} isValid={false} />);
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockProps.setFormData).toHaveBeenCalledTimes(0);
  });

  test('submit button should have disable class when isValid is false', () => {
    const component = render(<UserForm {...mockProps} isValid={false} />);
    const button = component.getByText('Submit');
    expect(button.classList.contains('disable')).toBe(true);
    expect(button.classList.contains('enable')).toBe(false);
  });

  test('should call setFormData if isValid is true', () => {
    const component = render(<UserForm {...mockProps} isValid={true} />);
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockProps.setFormData).toHaveBeenCalledTimes(1);
  });

  test('should call setFormData with form input data', () => {
    const component = render(<UserForm {...mockProps} isValid={true} />);
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockProps.setFormData).toHaveBeenCalledTimes(1);
    expect(mockProps.setFormData).toHaveBeenCalledWith(mockInitialState);
  });

  test('submit button should have enable class when isValid is true', () => {
    const component = render(<UserForm {...mockProps} isValid={true} />);
    const button = component.getByText('Submit');
    expect(button.classList.contains('enable')).toBe(true);
    expect(button.classList.contains('disable')).toBe(false);
  });
});
