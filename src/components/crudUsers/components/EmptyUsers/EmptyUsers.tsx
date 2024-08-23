import { Button, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';

const EmptyUsers = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Usuários</h1>
        <Empty description='Nenhum usuário encontrado...'/>
        <Button 
          type='primary'
          style={{ marginTop: "30px" }}
          onClick={() => navigate('/users/create-user')}
        >
          Adicionar Usuário
        </Button>
    </div>
  )
};

export default EmptyUsers;