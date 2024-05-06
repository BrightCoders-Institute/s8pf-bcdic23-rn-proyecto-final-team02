import * as Yup from 'yup';

export const SigupCompanyScheme = Yup.object().shape({
  name: Yup.string()
    .min(2, 'The name is too short')
    .required('Required!'),
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string()
    .min(8, 'Must contain at least 8 characters')
    .required('Required!'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required!'),
});

export const SignupWorkerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'The fist name is too short')
    .required('Required!'),
  lastName: Yup.string()
    .min(2, 'The last name is too short')
    .required('Required!'),
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string()
    .min(8, 'Must contain at last 8 characters')
    .required('Required!'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required!'),
});

export const LogInScheme = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required!'),
  password: Yup.string().required('Required!'),
})

