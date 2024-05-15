import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';

import {RegisterJobScheme} from '../../interface/schemes/RegisterJobScheme';

import TextComponent from '../TextComponent';
import InputComponent from '../InputComponent';

import {globalStyles} from '../../theme/globalTheme';
import useQuery from '../../hook/useQuery'; // Importa tu hook useQuery
import useAuth from '../../hook/useAuth';

interface Values {
  name: string;
  state: boolean;
  salary: string;
  description: string;
  requirements: string;
  img:string;
}

const JobForm = () => {
  const { registerJob } = useQuery(); // Obtiene la función registerJob de useQuery

  const {changeLoading} = useAuth();

  const cleanValues = (values: Values) => {
    values.name = '';
    values.state = true;
    values.salary = '';
    values.description = '';
    values.requirements = '';
    values.img =  '';
  };

  return (
    <Formik
      initialValues={{
        position: '',
        state: true,
        salary: '',
        description: '',
        requirements: '',
        img:'',
      }}
      validationSchema={RegisterJobScheme}
      onSubmit={async values => {
        await registerJob(values); // Llama a la función registerJob con los valores del formulario
      }}>
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      }) => (
        <>
          <View>
            <TextComponent styles={globalStyles.input} text="Name" />
            {touched.position && errors.position && (
              <TextComponent
                text={errors.position}
                color="red"
                font="bold"
                size={16}
              />
            )}
            <InputComponent
              keyboardType="default"
              value={values.position}
              onChangeText={handleChange('name')}
              placeholder="Marketing Assistant"
            />

            <TextComponent styles={globalStyles.input} text="Salary" />
            {touched.salary && errors.salary && (
              <TextComponent
                text={errors.salary}
                color="red"
                font="bold"
                size={16}
              />
            )}
            <InputComponent
              value={values.salary}
              onChangeText={handleChange('salary')}
              keyboardType="number-pad"
              placeholder="$X,XXX/month"
            />

            <TextComponent styles={globalStyles.input} text="Description" />
            {touched.description && errors.description && (
              <TextComponent
                text={errors.description}
                color="red"
                font="bold"
                size={16}
              />
            )}
            <InputComponent
              value={values.description}
              onChangeText={handleChange('description')}
              keyboardType="default"
              placeholder="We are seeking a highly motivated and creative [Job Title] to join our team. In this role, you will be responsible for [description of job responsibilities]. We are looking for someone with excellent [required skills] skills and the ability to [specific actions]"
              multiline={true}
              numberOfLines={10}
            />

            <TextComponent styles={globalStyles.input} text="Requirements" />
            {touched.requirements && errors.requirements && (
              <TextComponent
                text={errors.requirements}
                color="red"
                font="bold"
                size={16}
              />
            )}
            <InputComponent
              value={values.requirements}
              onChangeText={handleChange('requirements')}
              keyboardType="default"
              placeholder="Ideal candidates should have at least [number] years of experience in [related field], along with demonstrated skills in [specific skills]. The ability to [additional skills] is valued. Additionally, a solid understanding of [relevant concepts] and the ability to [additional actions] are essential"
              multiline={true}
              numberOfLines={10} // Puedes ajustar el número de líneas visibles según tus necesidades
            />

            <TextComponent
              styles={globalStyles.input}
              text='Imagen'
            />
            {touched.img && errors.img && (
              <TextComponent
                text={errors.img}
                color='red'
                font='bold'
                size={16}
              />
            )}
            <InputComponent
              value={values.img}
              onChangeText={handleChange('img')}
              keyboardType='default'
              placeholder=''
            />
          </View>

          {changeLoading ? (
            <ActivityIndicator size="large" style={{marginTop: 25}} />
          ) : (
            <TouchableOpacity
              disabled={!isValid || changeLoading}
              onPress={handleSubmit}
              style={globalStyles.primaryBtn}>
              <TextComponent
                text="REGISTER"
                font="bold"
                size={24}
                color="white"
                styles={{textAlign: 'center'}}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </Formik>
  );
};

export default JobForm;
