import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
type PROP = {
  id?: string;
  title: JSX.Element | string;
  content: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleConfirmUserDelete?: (_id: string) => Promise<void>;
};

const Modals = ({
  id,
  title,
  content,
  isModalOpen,
  setIsModalOpen,
  handleConfirmUserDelete,
}: PROP) => {
  const navigate = useNavigate();

  const onOkFunction = () => {
    if (id && handleConfirmUserDelete) {
      handleConfirmUserDelete(id);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={onOkFunction}
        cancelText="Cancelar"
        okText="Confirmar"
      >
        <p>{content}</p>
      </Modal>
    </>
  );
};

export default Modals;
