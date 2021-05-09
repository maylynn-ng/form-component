import React from 'react';
import { FormField } from '../Components';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockFormikObject } from '../__mocks__/forms';
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
  beforeEach(() => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[0]));
    component = render(<FormField {...mockProps} />);
    input = component.getByTestId('form-label');
  });

  test('should have * when field is required', () => {
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    // const input = component.getByTestId('form-label');
    expect(input).toHaveTextContent('Name');
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
  beforeEach(() => {
    const mockProps = generateMockProps(...Object.values(mockFieldData[2]));
    component = render(<FormField {...mockProps} />);
    input = component.getByTestId('form-label');
  });

  test('should have * when field is required', () => {
    const required = component.getByText('*');
    expect(required).toBeInTheDocument();
  });

  test('should have capitalized label of input', () => {
    expect(input).toHaveTextContent('Email');
  });

  // test('should render error message when no name is provided', () => {
  //   userEvent.type(input, 'thisisnotanemail{enter}');
  //   const errorMessage = component.getByTestId('error-message');
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
