import React from 'react';
import { UserForm } from '../Components';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  mockUserFormProps,
  mockValidForm,
  mockInitialForm,
  mockErrors,
  mockNoErrors,
} from '../__mocks__/forms';

const generateMockProps = (formData, errors, isValid) => {
  return {
    formData,
    errors,
    isValid,
  };
};

describe('UserForm', () => {
  test('should render name, role, email and password input fields', () => {
    const component = render(
      <UserForm
        {...mockUserFormProps}
        {...generateMockProps(mockInitialForm, mockErrors, false)}
      />
    );
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
      <UserForm
        {...mockUserFormProps}
        {...generateMockProps(mockInitialForm, mockErrors, false)}
      />
    );
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockUserFormProps.setFormData).toHaveBeenCalledTimes(0);
  });

  test('submit button should have disable class when isValid is false', () => {
    const component = render(
      <UserForm
        {...mockUserFormProps}
        {...generateMockProps(mockInitialForm, mockErrors, false)}
      />
    );
    const button = component.getByText('Submit');
    expect(button).toBeInTheDocument();
    expect(button.classList.contains('disable')).toBe(true);
    expect(button.classList.contains('enable')).toBe(false);
  });

  test("should call 'setFormData' and 'setAllowedPages' if isValid is true", () => {
    const component = render(
      <UserForm
        {...mockUserFormProps}
        {...generateMockProps(mockValidForm, mockNoErrors, true)}
      />
    );
    const button = component.getByText('Submit');
    userEvent.click(button);
    expect(mockUserFormProps.setFormPage).toHaveBeenCalledTimes(1);
    expect(mockUserFormProps.setFormPage).toHaveBeenCalledWith('privacyForm');
    expect(mockUserFormProps.setAllowedPages).toHaveBeenCalledTimes(1);
  });

  test('submit button should have enable class when isValid is true', () => {
    const component = render(
      <UserForm
        {...mockUserFormProps}
        {...generateMockProps(mockValidForm, mockNoErrors, true)}
      />
    );
    const button = component.getByText('Submit');
    expect(button).toBeInTheDocument();

    expect(button.classList.contains('enable')).toBe(true);
    expect(button.classList.contains('disable')).toBe(false);
  });
});
