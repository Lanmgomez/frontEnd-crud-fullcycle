import { useState, useEffect } from 'react';
import { usersUrl, GetUsersData } from './hooks/CrudUsersData';

import './Crud.scss';
import UserCard from './components/UserCard';
import EmptyUsers from './components/EmptyUsers/EmptyUsers';
import { Pagination } from 'antd';

const Crud = () => {

  const [showUsers, setShowUsers] = useState([]);
  const [page, setPage] = useState(1);
  
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
    return <EmptyUsers />;
  };

  const itensPerPage = 3;
  const startIndex = (page - 1) * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const paginatedUsers = showUsers.slice(startIndex, endIndex);

  return (
    <div className='crud-container'>
      <UserCard showUsers={paginatedUsers} />
        <Pagination 
          pageSize={3} 
          onChange={(page) => setPage(page)}
          current={page} 
          total={showUsers.length} 
        />      
    </div>
  )
};

export default Crud;