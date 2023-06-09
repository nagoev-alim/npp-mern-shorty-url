import * as yup from 'yup';

/**
 * @description - Basic Schema
 * @type {object}
 */
export const schema = {
  required: yup.string().required('Field is required'),
  name: yup.string()
    .min(3, `Must be at least 3 characters`)
    .max(30, `Must be 30 characters or less`)
    .matches(/^[A-z\s]+$/, '❌️ Only alphabets are allowed for this field')
    .required('Required'),
  email: yup.string()
    .email('❌️ Email is invalid')
    .matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, '❌️ Enter a valid email address')
    .required('❌️ Email is required'),
  password: yup.string()
    .max(30, `Must be 30 characters or less`)
    .matches(
      /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,
      `
          <p>❌️ Passwords will contain at least 1 upper case letter</p>
          <p>❌️ Passwords will contain at least 1 lower case letter</p>
          <p>❌️ Passwords will contain at least 1 number</p>
          <p>❌️ Passwords will contain at least 1 special character (!@#$%^&*()-_+.)</p>`)
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Password is required'),
  url: yup.string()
    .matches(/^(?:https?:\/\/)?(?:www\.)?[\w.-]+\.[a-zA-Z]{2,20}(?:\/.*)?$/, '❌️ Enter a valid URL address')
    .required('❌️ URL is required'),
};

/**
 * @description - Validate Schema
 * @type {object}
 */
export const validateSchema = {
  register: {
    name: schema.name,
    email: schema.email,
    password: schema.password,
  },
  login: {
    email: schema.email,
    password: schema.password,
  },
  url: {
    originalUrl: schema.url,
  },
};

/**
 * @description - Default Values
 * @type {object}
 */
export const defaultValues = {
  register: {
    name:'',
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  },
  url: {
    originalUrl: '',
  },
};
