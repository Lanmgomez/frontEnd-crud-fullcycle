import React, { useState, useEffect } from 'react';
import GetUsersData, { usersUrl } from './hooks/CrudUsersData';
import { Empty } from 'antd';

import './Crud.scss';
import UserCard from './components/UserCard';

const Crud = () => {

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
      <UserCard showUsers={showUsers} />
    </div>
  )
};

export default Crud;