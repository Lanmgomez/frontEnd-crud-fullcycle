import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
type PROP = {
  title: JSX.Element | string;
  content: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

const Modals = ({ title, content, isModalOpen, setIsModalOpen }: PROP) => {

  const navigate = useNavigate();

  return (
    <>
      <Modal 
        title={title}
        open={isModalOpen} 
        onOk={() => navigate("/")} 
        onCancel={() => setIsModalOpen(false)}
      >
        <p>{content}</p>
      </Modal>
    </>
  )
};

export default Modals;
