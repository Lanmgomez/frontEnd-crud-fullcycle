import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

type PROP = {
  isModalOpen: boolean;
  title: JSX.Element | string;
  content: string;
  setIsModalOpen: (value: boolean) => void;
};

const Modals = ({ isModalOpen, title, content, setIsModalOpen }: PROP) => {
  const navigate = useNavigate();

  const handlerLogOut = () => {
    localStorage.clear();
    setIsModalOpen(false);

    navigate("/");
  };

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handlerLogOut}
        onCancel={() => setIsModalOpen(false)}
        cancelText="Cancelar"
        okText="Confirmar"
      >
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default Modals;
