import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetUsersData, { usersUrl } from '../hooks/CrudUsersData';
import { formatDate, PROP } from '../../utils';

import './UserCardInfosById.scss';

const UserCardInfosById = () => {
  const { id } = useParams<{ id: string }>();

  const [showUser, setShowUser] = useState<PROP>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsersData(`${usersUrl}/${id}`);

      if (data) {
        setShowUser(data);
        return;
      }
    }; 

    fetchData();
  }, [id]);

  return (
    <div className="user-card-infos">
      <h1>{showUser?.name}</h1>
        <div>
          <div className="labels">
            <p className='p-name'>Nome: </p>
            <p className='p-info'>{showUser?.name}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Sobrenome: </p>
            <p className='p-info'>{showUser?.lastname}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Email: </p>
            <p className='p-info'>{showUser?.email}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Endereço: </p>
            <p className='p-info'>{showUser?.address}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Data de nascimento: </p>
            <p className='p-info'>{formatDate(showUser?.birthday)}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Telefone: </p>
            <p className='p-info'>{showUser?.phone}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Criado em: </p>
            <p className='p-info'>{formatDate(showUser?.createdAt)}</p>
          </div>

          <div className="labels">
            <p className='p-name'>Atualizado em: </p>
            <p className='p-info'>{formatDate(showUser?.updatedAt)}</p>
          </div>

        </div>  
    </div>
  );
};

export default UserCardInfosById;

