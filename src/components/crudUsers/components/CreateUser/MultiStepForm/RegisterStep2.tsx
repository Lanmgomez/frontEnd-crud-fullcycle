import { Form as FormAntd, Input } from 'antd';
import { useFormikContext, Form } from 'formik';
import { PROPS_FORM } from '../../EditCard/EditCard';

import '../CreateUser.scss';
import ErrorMessage from '../../ErrorMessages/ErrorMessage';
import { MaskPhone } from '../../../../utils';

const RegisterStep2 = () => {

  const { 
    setFieldValue, 
    errors, 
    touched, 
    values 
  } = useFormikContext <PROPS_FORM> ();

  return (
    <Form className='form'>
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

      <span className='form-span'>Telefone:</span>
      <FormAntd.Item>
        <Input 
          name="phone"
          maxLength={15}
          className='input-form'
          placeholder="Digite seu telefone..."
          type="text"
          onChange={(e) => setFieldValue('phone', e.target.value)}
          value={MaskPhone(values.phone)}
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