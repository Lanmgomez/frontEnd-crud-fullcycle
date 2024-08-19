import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

type PROP = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
};
const Modals = ({ isModalOpen, setIsModalOpen }: PROP ) => {

  const navigate = useNavigate();
  
  return (
    <>
      <Modal title="Você não salvou as alterações" 
        open={isModalOpen} 
        onOk={() => navigate("/")} 
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Tem certeza que deseja sair sem salvar?</p>
      </Modal>
    </>
  )
};

export default Modals;
