import React from 'react';
import { FormField, UserForm } from '../Components';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  mockFormikObject,
  mockUserFormProps,
  mockValidForm,
} from '../__mocks__/forms';
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
  let component;
  let input;
  let label;
  beforeEach(() => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[0]));
    component = render(<FormField {...mockProps} />);
    input = component.getByTestId('form-input');
    label = component.getByTestId('form-label');
  });

  test('should have * when field is required', () => {
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    // const input = component.getByTestId('form-label');
    expect(label).toHaveTextContent('Name');
  });

  // test('should render error message when no name is provided', () => {
  //   userEvent.type(input, '{tab}');
  //   const errorMessage = component.getByTestId('error-message');
  //   expect(errorMessage).toBeInTheDocument();
  // });
});

describe('FormField - Email', () => {
  let component;
  let input;
  let label;
  beforeEach(() => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[2]));
    component = render(<FormField {...mockProps} />);
    input = component.getByLabelText(/email/i);
    label = component.getByTestId('form-label');
  });

  test('should have * when field is required', () => {
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    expect(label).toHaveTextContent('Email');
  });

  //TODO: FIX THIS
  // test('should render error message when incorrect email is provided', () => {
  //   userEvent.type(input, 'thisisnotanemail');
  //   const errorMessage = component.getByTestId('error-message');
  //   expect(errorMessage).toBeInTheDocument();
  // });
});

//TODO: FIX THIS
// describe('FormField & UserForm', () => {
//   let userFormComponent;
//   let formFieldNameComponent;
//   let formFieldRoleComponent;
//   let formFieldEmailComponent;
//   let formFieldPasswordComponent;

//   beforeEach(() => {
//     userFormComponent = render(<UserForm {...mockUserFormProps} />);
//     const formFieldPropsArray = mockFieldData.map(fieldData => {
//       return generateMockProps(...Object.values(fieldData));
//     });
//     [
//       formFieldNameComponent,
//       formFieldRoleComponent,
//       formFieldEmailComponent,
//       formFieldPasswordComponent,
//     ] = formFieldPropsArray.map(props => {
//       return render(<FormField {...props} />);
//     });
//   });

// test('should call handleSubmit with trimmed versions of input', async () => {
//   const nameInput = formFieldNameComponent.getByLabelText(/name/i);
//   const roleInput = formFieldRoleComponent.getByLabelText(/role/i);
//   const emailInput = formFieldEmailComponent.getByLabelText(/email/i);
//   const passwordInput = formFieldPasswordComponent.getByLabelText(
//     /password/i
//   );
//   act(() => {
//     userEvent.type(nameInput, `   ${mockValidForm.name}   `);
//     userEvent.type(roleInput, `    ${mockValidForm.role}    `);
//     userEvent.type(emailInput, `    ${mockValidForm.email}    `);
//     userEvent.type(passwordInput, `${mockValidForm.password}`);
//   });
//   const button = userFormComponent.getByText('Submit');
//   userEvent.click(button);
//   expect(mockUserFormProps.handleSubmit).toHaveBeenCalledWith(mockValidForm);
// });
// });
