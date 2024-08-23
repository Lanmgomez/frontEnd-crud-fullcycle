import { PROP } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import '../Crud.scss';

type PROP_COMPONENT = {
    showUsers: PROP[]
};
const UserCard = ({ showUsers }: PROP_COMPONENT) => {

  const navigate = useNavigate();  
  const SeeMoreDetails = (id: number) => () => {
    navigate(`/users/${id}`);
  };

  return (
    <div>
        <div className='users-title-and-create-new-user-btn'>
            <h1>Usuários</h1>
            <Button
                type="primary"
                onClick={() => navigate('/users/create-user')}
            >
                Adicionar Usuário
            </Button>
        </div>
        
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
                    <Button 
                        type='primary' 
                        className='btn-see-more-details'
                        onClick={SeeMoreDetails(user.id)}
                    >
                        Ver Mais
                    </Button>
                </div>
  
          </div>
        ))}
    </div>
  )
};

export default UserCard;