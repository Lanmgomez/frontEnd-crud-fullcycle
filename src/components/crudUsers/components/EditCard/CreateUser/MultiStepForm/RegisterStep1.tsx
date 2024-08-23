import { Form as FormAntd, Input } from 'antd';
import { Form, useFormikContext } from 'formik';

import '../CreateUser.scss';
import { PROPS_FORM } from '../../EditCard';
import ErrorMessage from '../../ErrorMessages/ErrorMessage';

const RegisterStep1 = () => {

  const { 
    setFieldValue, 
    errors, 
    touched, 
    values 
  } = useFormikContext <PROPS_FORM> ();

  return (
    <Form className='form'>
      <span className='form-span'>Nome:</span>
      <FormAntd.Item>
        <Input 
          name="name"
          className='input-form'
          placeholder="Digite seu nome..."
          type="text"
          onChange={(e) => setFieldValue('name', e.target.value)}
          value={values.name}
        />  
      </FormAntd.Item>
      <ErrorMessage error={errors.name} touched={touched.name} />

      <span className='form-span'>Sobrenome:</span>
      <FormAntd.Item>
        <Input 
          name="lastname"
          className='input-form'
          placeholder="Digite seu sobrenome..."
          type="text"
          onChange={(e) => setFieldValue('lastname', e.target.value)}
          value={values.lastname}
        />  
      </FormAntd.Item>
      <ErrorMessage error={errors.lastname} touched={touched.lastname} />

      <span className='form-span'>Email:</span>
      <FormAntd.Item>
        <Input 
          name="email"
          className='input-form'
          placeholder="Digite seu e-mail..."
          type="text"
          onChange={(e) => setFieldValue('email', e.target.value)}
          value={values.email}
        />  
      </FormAntd.Item>
      <ErrorMessage error={errors.email} touched={touched.email} />

    </Form>
  );
};

export default RegisterStep1;