import React, { useState, useEffect } from 'react';
import GetUsersData, { usersUrl } from './hooks/CrudUsersData';

import './CrudUsers.scss';

type PROP = {
  id: number,
  name: string,
  lastname: string,
  email: string,
  address: string,
  birthday: string,
  phone: number,
  createdAt: string,
  updatedAt: string
}

const CrudUsers = () => {

  const [showUsers, setShowUsers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsersData(usersUrl);

      if (data) {
        setShowUsers(data);
        return;
      }
    }; 

    fetchData();
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      {showUsers?.map((user: PROP) => (
        <div key={user.id} className="user-card">

          <div className="labels">
            <p className='p-name'>Nome: </p>
            <p className='p-info'>{user.name}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Sobrenome: </p>
            <p className='p-info'>{user.lastname}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Email: </p>
            <p className='p-info'>{user.email}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Endereço: </p>
            <p className='p-info'>{user.address}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Data de nascimento: </p>
            <p className='p-info'>{user.birthday}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Telefone: </p>
            <p className='p-info'>{user.phone}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Criado em: </p>
            <p className='p-info'>{user.createdAt}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Atualizado em: </p>
            <p className='p-info'>{user.updatedAt}</p>
          </div>

        </div>
      ))}
    </div>
  )
}

export default CrudUsers