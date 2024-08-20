import { useState, useEffect } from 'react';
import { usersUrl, GetUsersData } from './hooks/CrudUsersData';

import './Crud.scss';
import UserCard from './components/UserCard';
import EmptyUsers from './components/EmptyUsers/EmptyUsers';

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
    return <EmptyUsers />;
  };

  return (
    <div className='crud-container'>
      <UserCard showUsers={showUsers} />
    </div>
  )
};

export default Crud;