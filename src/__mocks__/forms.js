export const mockValidForm = {
  name: 'Dwight',
  role: 'Schrute',
  email: 'd.shrute@dundermiflin.com',
  password: 'butReallyIamR3cyl0ps',
};

export const mockCommsOptions = {
  updates: false,
  communication: false,
};

export const mockInitialForm = {
  name: '',
  role: '',
  email: '',
  password: '',
};

export const mockErrors = {
  name: "Don't forget your name!",
  role: '',
  email: 'Please provide an email',
  password: 'Please provide a password',
};

export const mockNoErrors = {
  name: '',
  role: '',
  email: '',
  password: '',
};

export const mockUserFormProps = {
  setIsValid: jest.fn(),
  setFormPage: jest.fn(),
  setAllowedPages: jest.fn(),
  setFormData: jest.fn(),
  setErrors: jest.fn(),
};
