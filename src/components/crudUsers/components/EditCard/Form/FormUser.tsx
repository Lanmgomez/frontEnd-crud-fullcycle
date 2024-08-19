import { Button, DatePicker, Form as FormAntd, Input } from 'antd';
import { useFormikContext, Form } from 'formik';

import '../EditCard.scss';
import { useState } from 'react';
import Modals from '../Modals/Modals';

const FormUser = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(true);
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
          onChange={() => {}}
          value={''}
        />  
      </FormAntd.Item>

      <span className='form-span'>Sobrenome:</span>
      <FormAntd.Item>
        <Input 
          name="lastname"
          className='input-form'
          placeholder="Digite seu sobrenome..."
          type="text"
          onChange={() => {}}
          value={''}
        />  
      </FormAntd.Item>

      <span className='form-span'>Email:</span>
      <FormAntd.Item>
        <Input 
          name="email"
          className='input-form'
          placeholder="Digite seu e-mail..."
          type="text"
          onChange={() => {}}
          value={''}
        />  
      </FormAntd.Item>

      <span className='form-span'>Data de nascimento:</span>
      <FormAntd.Item>
        <Input 
          name="birthday"
          className='input-form'
          placeholder="Digite sua data de nascimento..."
          type="text"
          onChange={() => {}}
          value={''}
        />  
      </FormAntd.Item>

      <span className='form-span'>Telefone:</span>
      <FormAntd.Item>
        <Input 
          name="phone"
          className='input-form'
          placeholder="Digite seu telefone..."
          type="text"
          onChange={() => {}}
          value={''}
        />  
      </FormAntd.Item>

      <span className='form-span'>Endereço:</span>
      <FormAntd.Item>
        <Input 
          name="address"
          className='input-form'
          placeholder="Digite seu endereço..."
          type="text"
          onChange={() => {}}
          value={''}
        />  
      </FormAntd.Item>

      <div className='form-buttons'>
        <Button onClick={handleCancel}>
          Cancelar
        </Button>

        <Modals 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen} 
        />

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {}}
        >
          Salvar
        </Button>
      </div>

    </Form>
  )
};

export default FormUser;