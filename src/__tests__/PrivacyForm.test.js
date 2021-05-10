import React from 'react';
import { PrivacyForm } from '../Components';
import { render, cleanup, act } from '@testing-library/react';
import { mockCommsOptions } from '../__mocks__/forms';
import userEvent from '@testing-library/user-event';

const mockPrivacyFormProps = {
  setCommsOptions: jest.fn(),
  setFormPage: jest.fn(),
  setAllowedPages: jest.fn(),
  setFormData: jest.fn(),
  commsOptions: mockCommsOptions,
};

describe('PrivacyForm', () => {
  let component;
  let checkboxes;
  let updatesCheckbox;
  let communicationCheckbox;

  beforeEach(() => {
    component = render(<PrivacyForm {...mockPrivacyFormProps} />);
    checkboxes = component.getAllByTestId('checkbox');
    updatesCheckbox = checkboxes[0];
    communicationCheckbox = checkboxes[1];
  });

  afterEach(() => {
    cleanup();
  });

  test('should render two checkboxes', () => {
    expect(checkboxes).toHaveLength(2);
    expect(updatesCheckbox).toBeInTheDocument();
    expect(communicationCheckbox).toBeInTheDocument();
  });

  test('should be unchecked by default', () => {
    expect(updatesCheckbox).not.toBeChecked();
    expect(mockPrivacyFormProps.commsOptions.updates).toBe(false);
    expect(communicationCheckbox).not.toBeChecked();
    expect(mockPrivacyFormProps.commsOptions.communication).toBe(false);
  });

  test('should toggle checkboxes on click', () => {
    expect(updatesCheckbox).not.toBeChecked();
    act(() => userEvent.click(updatesCheckbox));
    expect(updatesCheckbox).toBeChecked();
    act(() => userEvent.click(updatesCheckbox));
    expect(updatesCheckbox).not.toBeChecked();
    act(() => userEvent.click(communicationCheckbox));
    expect(communicationCheckbox).toBeChecked();
    act(() => userEvent.click(communicationCheckbox));
    expect(communicationCheckbox).not.toBeChecked();
  });

  test("should call setFormPage with 'doneForm' on submit", () => {
    const submit = component.getByText(/Submit/i);
    act(() => userEvent.click(submit));
    expect(mockPrivacyFormProps.setFormPage).toBeCalledTimes(1);
    expect(mockPrivacyFormProps.setFormPage).toBeCalledWith('doneForm');
  });

  test('should call setAllowedPages with all pages', () => {
    const submit = component.getByText(/Submit/i);
    act(() => userEvent.click(submit));
    expect(mockPrivacyFormProps.setAllowedPages).toBeCalledTimes(1);
  });
});
