import { Button, DatePicker, Form as FormAntd, Input } from 'antd';
import { useFormikContext, Form } from 'formik';

import '../EditCard.scss';
import '../Modals/Modals.scss';
import { useEffect, useState } from 'react';
import Modals from '../Modals/Modals';
import { GetUsersData, usersUrl } from '../../../hooks/CrudUsersData';
import { useParams } from 'react-router-dom';
import { PROPS_FORM } from '../EditCard';

const FormUser = () => {

  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState <boolean> (false);

  const { 
    submitForm, 
    setFieldValue, 
    setValues, 
    values 
  } = useFormikContext <PROPS_FORM> ();
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsersData(`${usersUrl}/${id}`);

      if (data) {
        setValues({ ...data });
        return;
      };
    }; 

    fetchData();
  }, [id]);

  const modalTitle = () => {
    return (
      <div className='modal-title'>
        <i className="bi bi-exclamation-circle-fill" />
        <p className='p-modal-title'>Você não salvou as informações.</p>
      </div>
    );
  };

  return (
    <Form className='form'>
      <h2 className='form-title'>Edite as informações Pessoais</h2>

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

      <div className='form-buttons'>
        <Button onClick={() => setIsModalOpen(true)}>
          Cancelar
        </Button>

        <Modals 
          title={modalTitle()} 
          content={"Tem certeza que deseja sair sem salvar?"} 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen} 
        />

        <Button
          type="primary"
          onClick={submitForm}
        >
          Salvar
        </Button>
      </div>

    </Form>
  )
};

export default FormUser;