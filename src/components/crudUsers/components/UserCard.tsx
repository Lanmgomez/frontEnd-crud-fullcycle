import React from 'react';
import { PROP } from '../../utils';
import { Link } from 'react-router-dom';

import '../Crud.scss';

type PROP_COMPONENT = {
    showUsers: PROP[]
};
const UserCard = ({ showUsers }: PROP_COMPONENT) => {
  return (
    <div>
        {showUsers?.map((user: PROP) => (
            <div key={user.id} className="user-card">

                <div className='block-of-informations'>
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
};

export default UserCard;