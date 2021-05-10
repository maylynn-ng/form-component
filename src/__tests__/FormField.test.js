import React from 'react';
import { FormField } from '../Components';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  mockErrors,
  mockNoErrors,
  mockValidForm,
  mockInitialForm,
} from '../__mocks__/forms';

const generateFormFieldMockProps = (
  label,
  type,
  isRequired,
  errors,
  formData
) => {
  return {
    label,
    type,
    isRequired,
    handleChange: jest.fn(),
    errors,
    formData,
  };
};

// created to generate all formfields in a more coherent way
const mockFieldData = {
  name: { label: 'name', type: 'text', isRequired: true },
  role: { label: 'role', type: 'text', isRequired: false },
  email: { label: 'email', type: 'email', isRequired: true },
  password: { label: 'password', type: 'password', isRequired: true },
};

describe('FormField - Name', () => {
  let mockProps;
  let component;

  beforeEach(() => {
    mockProps = generateFormFieldMockProps(
      ...Object.values(mockFieldData.name),
      mockErrors,
      mockInitialForm
    );
    component = render(<FormField {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  test('should have * when field is required', () => {
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    const label = component.getByTestId('form-label');
    expect(label).toHaveTextContent('Name');
  });

  test('should render error message when no name is provided', () => {
    const input = component.getByTestId('form-input');
    expect(input).toBeInTheDocument();
    userEvent.type(input, '{tab}'); // inputs empty string
    const errorMessage = component.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
});

describe('FormField - Email', () => {
  let mockProps;
  let component;

  beforeEach(() => {
    mockProps = generateFormFieldMockProps(
      ...Object.values(mockFieldData.email),
      mockErrors,
      mockInitialForm
    );
    component = render(<FormField {...mockProps} />);
  });

  test('should have * when field is required', () => {
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    const label = component.getByTestId('form-label');
    expect(label).toHaveTextContent('Email');
  });

  test('should have capitalized label of input', () => {
    const label = component.getByTestId('form-label');
    expect(label).toHaveTextContent('Email');
  });
});

describe('FormField - No Errors', () => {
  test('should not render error message when all fields are valid', () => {
    // renders all the fields using the mockFieldData object above and naming them to make them easier to refer to in this test
    const [
      formFieldNameComponent,
      formFieldRoleComponent,
      formFieldEmailComponent,
      formFieldPasswordComponent,
    ] = Object.values(mockFieldData).map(data => {
      const mockProps = generateFormFieldMockProps(
        ...Object.values(data),
        mockNoErrors,
        mockValidForm
      );
      return render(<FormField {...mockProps} />);
    });
    const nameErrorMessage = formFieldNameComponent.queryByTestId(
      'error-message'
    );
    expect(nameErrorMessage).toBeNull();
    const roleErrorMessage = formFieldRoleComponent.queryByTestId(
      'error-message'
    );
    expect(roleErrorMessage).toBeNull();

    const emailErrorMessage = formFieldEmailComponent.queryByTestId(
      'error-message'
    );
    expect(emailErrorMessage).toBeNull();

    const passwordErrorMessage = formFieldPasswordComponent.queryByTestId(
      'error-message'
    );
    expect(passwordErrorMessage).toBeNull();
  });
});
