import { Formik } from 'formik';
import FormUser from './Form/FormUser';
const EditCard = () => {
  return (
    <div className='edit-card'>
        <Formik
            initialValues={{}}
            validationSchema={{}}
            onSubmit={() => {}}
            enableReinitialize
        >
            <FormUser />
        </Formik>
    </div>
  )
};

export default EditCard;