import * as Yup from 'yup';

export const RegisterJobScheme = Yup.object().shape({
    position: Yup.string()
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
    img: Yup.string()
    .min(2, 'The img is too short')
    .required('Required!'),
});