import { Form as FormAntd, Input } from 'antd';
import { useFormikContext, Form } from 'formik';
import { PROPS_FORM } from '../../EditCard';

import '../CreateUser.scss';
import ErrorMessage from '../../ErrorMessages/ErrorMessage';

const RegisterStep2 = () => {

  const { 
    setFieldValue, 
    errors, 
    touched, 
    values 
  } = useFormikContext <PROPS_FORM> ();

  return (
    <Form className='form'>
      <span className='form-span'>Data de nascimento:</span>
      <FormAntd.Item>
        <Input 
          name="birthday"
          className='input-form'
          placeholder="Digite sua data de nascimento..."
          type="text"
          onChange={(e) => setFieldValue('birthday', e.target.value)}
          value={values.birthday}
        />  
      </FormAntd.Item>
      <ErrorMessage error={errors.birthday} touched={touched.birthday} />

      <span className='form-span'>Telefone:</span>
      <FormAntd.Item>
        <Input 
          name="phone"
          className='input-form'
          placeholder="Digite seu telefone..."
          type="text"
          onChange={(e) => setFieldValue('phone', e.target.value)}
          value={values.phone}
        />  
      </FormAntd.Item>
      <ErrorMessage error={errors.phone} touched={touched.phone} />

      <span className='form-span'>Endereço:</span>
      <FormAntd.Item>
        <Input 
          name="address"
          className='input-form'
          placeholder="Digite seu endereço..."
          type="text"
          onChange={(e) => setFieldValue('address', e.target.value)}
          value={values.address}
        />  
      </FormAntd.Item>
      <ErrorMessage error={errors.address} touched={touched.address} />

    </Form>
  );
};

export default RegisterStep2;