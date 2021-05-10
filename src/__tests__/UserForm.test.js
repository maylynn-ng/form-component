import React from 'react';
import { UserForm } from '../Components';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockInitialState, mockUserFormProps } from '../__mocks__/forms';

describe('UserForm', () => {
  test('should render name, role, email and password input fields', () => {
    const component = render(<UserForm {...mockUserFormProps} />);
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
    const component = render(
      <UserForm {...mockUserFormProps} isValid={false} />
    );
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockUserFormProps.setFormData).toHaveBeenCalledTimes(0);
  });

  test('submit button should have disable class when isValid is false', () => {
    const component = render(
      <UserForm {...mockUserFormProps} isValid={false} />
    );
    const button = component.getByText('Submit');
    expect(button.classList.contains('disable')).toBe(true);
    expect(button.classList.contains('enable')).toBe(false);
  });

  test('should call setFormData if isValid is true', () => {
    const component = render(
      <UserForm {...mockUserFormProps} isValid={true} />
    );
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockUserFormProps.setFormData).toHaveBeenCalledTimes(1);
  });

  test('should call setFormData with form input data', () => {
    const component = render(
      <UserForm {...mockUserFormProps} isValid={true} />
    );
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockUserFormProps.setFormData).toHaveBeenCalledTimes(1);
    expect(mockUserFormProps.setFormData).toHaveBeenCalledWith(
      mockInitialState
    );
  });

  test('submit button should have enable class when isValid is true', () => {
    const component = render(
      <UserForm {...mockUserFormProps} isValid={true} />
    );
    const button = component.getByText('Submit');
    expect(button.classList.contains('enable')).toBe(true);
    expect(button.classList.contains('disable')).toBe(false);
  });
});
