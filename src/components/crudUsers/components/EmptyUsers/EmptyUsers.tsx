import React from 'react';
import { Empty } from 'antd';

const EmptyUsers = () => {
  return (
    <div>
      <h1>Usuários</h1>
        <Empty description='Nenhum usuário encontrado...'/>
    </div>
  )
};

export default EmptyUsers;