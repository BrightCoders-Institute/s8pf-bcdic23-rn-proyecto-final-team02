import * as Yup from 'yup';

export const RegisterJobScheme = Yup.object().shape({
    name: Yup.string()
      .min(2, 'The name is too short')
      .required('Required!'),
    salary: Yup.string()
      .min(2,'The salary is too short')
      .required('Required!'),
    description:Yup.string()
      .min(2, 'The description is too short')
      .required('Required!'),
    requirements: Yup.string()
      .min(2, 'The description is too short')
      .required('Required!'),
});