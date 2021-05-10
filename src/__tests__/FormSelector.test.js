import React from 'react';
import { FormSelector } from '../Components';
import { render } from '@testing-library/react';

const mockFormSelectorProps = {
  setFormPage: jest.fn(),
  pagesArray: ['userForm', 'privacyForm', 'doneForm'],
  setAllowedPages: jest.fn(),
  setIsValid: jest.fn(),
};

describe('FormSelector', () => {
  describe('UserForm page and invalid form', () => {
    let component;
    let allTabs;
    beforeAll(() => {
      component = render(
        <FormSelector
          {...mockFormSelectorProps}
          formPage="userForm"
          allowedPages={['userForm']}
        />
      );
      allTabs = component.getAllByTestId('tab-selector');
    });
    test("should render 'User', 'Privacy' and 'Done' as tab headings", () => {
      expect(allTabs).toHaveLength(3);
      expect(allTabs[0]).toHaveTextContent('User');
      expect(allTabs[1]).toHaveTextContent('Privacy');
      expect(allTabs[2]).toHaveTextContent('Done');
    });
    test("'User' tab should have class 'selected'", () => {
      expect(allTabs[0]).toHaveClass('selected');
    });
    test("'Privacy' and 'Done' tabs to have 'disable' class", () => {
      expect(allTabs[1]).toHaveClass('disable');
      expect(allTabs[2]).toHaveClass('disable');
    });
  });
  describe('Privacy page and valid form', () => {
    let component;
    let allTabs;
    beforeAll(() => {
      component = render(
        <FormSelector
          {...mockFormSelectorProps}
          formPage="privacyForm"
          allowedPages={['userForm', 'privacyForm']}
        />
      );
      allTabs = component.getAllByTestId('tab-selector');
    });
    test("should render 'User', 'Privacy' and 'Done' as tab headings", () => {
      expect(allTabs).toHaveLength(3);
      expect(allTabs[0]).toHaveTextContent('User');
      expect(allTabs[1]).toHaveTextContent('Privacy');
      expect(allTabs[2]).toHaveTextContent('Done');
    });
    test("'Privacy' tab should have class 'selected'", () => {
      expect(allTabs[1]).toHaveClass('selected');
    });
    test("'Done' tabs to have 'disable' class", () => {
      expect(allTabs[2]).toHaveClass('disable');
    });
  });
  describe('Done page', () => {
    let component;
    let allTabs;
    beforeAll(() => {
      component = render(
        <FormSelector
          {...mockFormSelectorProps}
          formPage="doneForm"
          allowedPages={['userForm', 'privacyForm', 'doneForm']}
        />
      );
      allTabs = component.getAllByTestId('tab-selector');
    });
    test("should render 'User', 'Privacy' and 'Done' as tab headings", () => {
      expect(allTabs).toHaveLength(3);
      expect(allTabs[0]).toHaveTextContent('User');
      expect(allTabs[1]).toHaveTextContent('Privacy');
      expect(allTabs[2]).toHaveTextContent('Done');
    });
  });
});
