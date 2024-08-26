import { DatePicker, Form as FormAntd, Input } from 'antd';
import { Form, useFormikContext } from 'formik';

import '../CreateUser.scss';
import { PROPS_FORM } from '../../EditCard/EditCard';
import ErrorMessage from '../../ErrorMessages/ErrorMessage';
import moment, { Moment } from 'moment';

const RegisterStep1 = () => {

  const { 
    setFieldValue, 
    errors, 
    touched, 
    values 
  } = useFormikContext <PROPS_FORM> ();

  const handleFormatDate = (date: Moment) => {
    if (date) {
      const formattedBirthISO = date?.format('YYYY-MM-DD');
      return setFieldValue('birthday', formattedBirthISO);
    } else {
      return setFieldValue('birthday', '');
    };
  };

  return (
    <Form className='form'>
      <h4 className='form-title'>Preencha todos os campos abaixo</h4>

      <span className='form-span'>
        Nome: <span className='asterisk'>*</span>
      </span>
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

      <span className='form-span'>
        Sobrenome: <span className='asterisk'>*</span>
      </span>
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

      <span className='form-span'>
        Data de nascimento: <span className='asterisk'>*</span>
      </span>
      <FormAntd.Item>
        <DatePicker 
          name="birthday"
          format="DD/MM/YYYY"
          className='input-form'
          placeholder="Selecione sua data de nascimento..."
          onChange={(date) => handleFormatDate(date)}
          value={values.birthday ? moment.utc(values.birthday) : null}
          disabledDate={(date) => date > moment().endOf('day')} // disabled future dates
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.birthday} touched={touched.birthday} />

    </Form>
  );
};

export default RegisterStep1;