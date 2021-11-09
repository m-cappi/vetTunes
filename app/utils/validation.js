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
const confirmationPasswordRule = match =>
  yup
    .string()
    .required('Password confirmation is required!')
    .oneOf([yup.ref(match), null], 'Passwords must match');
const nameRule = yup
  .string()
  .required('You need a name!')
  .min(2, 'Too short!')
  .max(30, 'Too long! (max 30 char)');

const searchRule = yup
  .string()
  .required('We need something to search by!')
  .min(3, 'Too short! Please be more specific');

export const SignupSchema = yup.object().shape({
  email: emailRule,
  password: passwordRule,
  confirmationPassword: confirmationPasswordRule('password'),
});

export const SigninSchema = yup
  .object()
  .shape({email: emailRule, password: passwordRule});

export const UpdatePasswordSchema = yup.object().shape({
  password: passwordRule,
  newPassword: passwordRule,
  newConfirmationPassword: confirmationPasswordRule('newPassword'),
});

export const NameChangeSchema = yup.object().shape({displayName: nameRule});

export const SearchSchema = yup.object().shape({searchValue: searchRule});
