import { Formik } from 'formik';
import FormUser from './Form/FormUser';
import { validationSchema } from './validations'; 
import { useNavigate, useParams } from 'react-router-dom';
import { handleSuccessNotification } from '../../../utils';
import { UpdateUsersData, usersUrl } from '../../hooks/CrudUsersData';
export type PROPS_FORM =  {
  name: string;
  lastname: string;
  email: string;
  birthday: string;
  phone: string;
  address: string;
};

const initialValues: PROPS_FORM = {
  name: '',
  lastname: '',
  email: '',
  birthday: '',
  phone: '',
  address: '',
};

function EditCard() {
  
  const { id } = useParams<{ id: string }>();
  
  const navigate = useNavigate();
  const handleSubmit = async (values: PROPS_FORM) => {
    if (!values) {
      return
    };

    try {
      await UpdateUsersData(`${usersUrl}/${id}`, values);
      handleSuccessNotification('Usuário editado com sucesso', 'Suas alterações foram salvas');
      navigate("/");
    } 
    catch (error) {
      console.log(error);
    };
  };

  return (
    <div className='edit-card'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <FormUser />
      </Formik>
    </div>
  );
};

export default EditCard;