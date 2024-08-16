import React, { useState, useEffect } from 'react';
import GetUsersData, { usersUrl } from './hooks/CrudUsersData';
import { Empty } from 'antd';
import { PROP, formatDate } from '../utils';

import './CrudUsers.scss';
import { Link } from 'react-router-dom';

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

  if (showUsers.length === 0) {
    return (
      <div>
        <h1>Usuários</h1>
          <Empty />
        <p>Nenhum usuário encontrado...</p>
      </div>
    );
  };

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
            <p className='p-info'>{formatDate(user.birthday)}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Telefone: </p>
            <p className='p-info'>{user.phone}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Criado em: </p>
            <p className='p-info'>{formatDate(user.createdAt)}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Atualizado em: </p>
            <p className='p-info'>{formatDate(user.updatedAt)}</p>
          </div>

          <div>
            <Link to={`/users/${user.id}`} className='see-more-btn-link'>
              Ver Mais
            </Link>
          </div>

        </div>
      ))}
    </div>
  )
}

export default CrudUsers