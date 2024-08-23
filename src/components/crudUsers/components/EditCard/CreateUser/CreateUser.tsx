import { Formik } from 'formik';
import { PROPS_FORM } from '../EditCard';
import MultiStepForm from './MultiStepForm/MultiStepForm';
import { validationSchema } from '../validations';
import { CreateNewUser, usersUrl } from '../../../hooks/CrudUsersData';
import { useNavigate } from 'react-router-dom';
import { handleSuccessNotification } from '../../../../utils';

const initialValues: PROPS_FORM = {
  name: '',
  lastname: '',
  email: '',
  birthday: '',
  phone: '',
  address: '',
};

const CreateUser = () => {

  const navigate = useNavigate();  

  const handleCreateUser = async (values: PROPS_FORM) => {
    if (!values) {
      return;  
    };
    console.log(values);

    try {
        await CreateNewUser(usersUrl, values);
        handleSuccessNotification(
            'Novo usuário criado com sucesso!', 
            'Seu novo usuário foi criado com sucesso.'
        );
        navigate("/");
        
    } catch (error) {
      console.log(error);
    };
  };  

  return (
    <div className='create-user'>
      <h1>Crie um novo usuário</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleCreateUser}
          enableReinitialize
        >
          <MultiStepForm />
        </Formik>
    </div>
  );
};

export default CreateUser;