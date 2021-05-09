export const mockValidForm = {
  name: 'Dwight',
  role: 'Schrute',
  email: 'd.shrute@dundermiflin.com',
  password: 'butReallyIamR3cyl0ps',
  updates: true,
  communication: true,
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
