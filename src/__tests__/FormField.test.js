import React from 'react';
import { FormField, UserForm } from '../Components';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockFormikObject, mockUserFormProps } from '../__mocks__/forms';
import { formValidationSchema } from '../types';

const generateMockProps = (label, type, required) => {
  return {
    label,
    formik: mockFormikObject,
    formValidationSchema,
    setIsValid: jest.fn(),
    type,
    required,
  };
};

const mockFieldData = [
  { label: 'name', type: 'text', required: true },
  { label: 'role', type: 'text', required: false },
  { label: 'email', type: 'email', required: true },
  { label: 'password', type: 'password', required: true },
];

describe('FormField - Name', () => {
  test('should have * when field is required', () => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[0]));
    const component = render(<FormField {...mockProps} />);
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[0]));
    const component = render(<FormField {...mockProps} />);
    const label = component.getByTestId('form-label');
    expect(label).toHaveTextContent('Name');
  });

  test('should render error message when no name is provided', () => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[0]));
    const mockPropsWithNoNameError = {
      ...mockProps,
      formik: {
        ...mockProps.formik,
        errors: {
          ...mockProps.formik.errors,
          name: "Don't forget your name!",
        },
      },
    };
    const component = render(<FormField {...mockPropsWithNoNameError} />);
    const input = component.getByTestId('form-input');
    expect(input).toBeInTheDocument();
    userEvent.type(input, '{tab}');
    const errorMessage = component.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
});

describe('FormField - Email', () => {
  test('should have * when field is required', () => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[2]));
    const component = render(<FormField {...mockProps} />);
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[2]));
    const component = render(<FormField {...mockProps} />);
    const label = component.getByTestId('form-label');
    expect(label).toHaveTextContent('Email');
  });

  //TODO: FIX THIS - update formik errors?
  test('should render error message when incorrect email is provided', () => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[2]));
    const mockPropsWithNoEmailError = {
      ...mockProps,
      formik: {
        ...mockProps.formik,
        errors: {
          ...mockProps.formik.errors,
          email: "Hmm... this email doesn't seem right",
        },
      },
    };
    const component = render(<FormField {...mockPropsWithNoEmailError} />);
    const input = component.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'thisisnotanemail');
    const errorMessage = component.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
});

describe('FormField & UserForm', () => {
  let userFormComponent;
  let formFieldNameComponent;
  let formFieldRoleComponent;
  let formFieldEmailComponent;
  let formFieldPasswordComponent;

  beforeEach(() => {
    userFormComponent = render(<UserForm {...mockUserFormProps} />);
    const formFieldPropsArray = mockFieldData.map(fieldData => {
      return generateMockProps(...Object.values(fieldData));
    });
    [
      formFieldNameComponent,
      formFieldRoleComponent,
      formFieldEmailComponent,
      formFieldPasswordComponent,
    ] = formFieldPropsArray.map(props => {
      return render(<FormField {...props} />);
    });
  });

  test('should not call setFormData when fields are invalid', async () => {
    const nameInput = formFieldNameComponent.getByLabelText(/name/i);
    const roleInput = formFieldRoleComponent.getByLabelText(/role/i);
    const emailInput = formFieldEmailComponent.getByLabelText(/email/i);
    const passwordInput = formFieldPasswordComponent.getByLabelText(
      /password/i
    );
    expect(nameInput).toBeInTheDocument();
    expect(roleInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const button = userFormComponent.getByText('Submit');
    userEvent.click(button);
    expect(mockUserFormProps.setFormData).toHaveBeenCalledTimes(0);
    expect(button).toHaveClass('disable');
  });
});
