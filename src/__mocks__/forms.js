export const mockValidForm = {
  name: 'Dwight',
  role: 'Schrute',
  email: 'd.shrute@dundermiflin.com',
  password: 'butReallyIamR3cyl0ps',
  updates: false,
  communication: false,
};

export const mockInitialState = {
  name: '',
  role: '',
  email: '',
  password: '',
  updates: false,
  communication: false,
};

export const mockFormikObject = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  initialValues: mockInitialState,
  values: mockInitialState,
  errors: {
    name: '',
    role: '',
    email: '',
    password: '',
  },
};

export const mockUserFormProps = {
  handleSubmit: jest.fn(),
  setIsValid: jest.fn(),
  setFormData: jest.fn(),
  setAllowedPages: jest.fn(),
  setFormData: jest.fn(),
  setFormPage: jest.fn(),
};
