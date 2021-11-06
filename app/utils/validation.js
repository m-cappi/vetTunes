import * as yup from 'yup';

const emailRule = yup
  .string()
  .email('Invalid email')
  .required('Email is required!');
const passwordRule = yup
  .string()
  .min(6, 'Too short!')
  .max(30, 'Too long!')
  .required('Password is required!');
const confirmationPasswordRule = yup
  .string()
  .required('Password confirmation is required!')
  .oneOf([yup.ref('password'), null], 'Passwords must match');

export const SignupSchema = yup.object().shape({
  email: emailRule,
  password: passwordRule,
  confirmationPassword: confirmationPasswordRule,
});

export const SigninSchema = yup
  .object()
  .shape({email: emailRule, password: passwordRule});
