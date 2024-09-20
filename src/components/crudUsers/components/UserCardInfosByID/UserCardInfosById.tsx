import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usersUrl, GetUsersData, DeleteUser } from "../../hooks/CrudUsersData";
import { formatDate, handleSuccessNotification, PROP } from "../../../utils";

import "./UserCardInfosById.scss";
import { Button } from "antd";
import Modals from "../Modals/Modals";
import Container from "../Container/Container";

const UserCardInfosById = () => {
  const { id } = useParams<{ id: string }>();

  const [showUser, setShowUser] = useState<PROP>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleConfirmUserDelete = async (id: string) => {
    if (!id) {
      return;
    }

    try {
      await DeleteUser(`${usersUrl}/${id}`, { ...showUser });

      navigate("/home");
      handleSuccessNotification(
        "Usuário deletado com sucesso!",
        "O item foi excluído com sucesso."
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsersData(`${usersUrl}/${id}`);

      if (data) {
        setShowUser(data);
        return;
      }
    };

    fetchData();
  }, [id]);

  const modalTitle = (title: string) => {
    return (
      <div className="modal-title">
        <i className="bi bi-exclamation-circle-fill" />
        <p className="p-modal-title">{title}</p>
      </div>
    );
  };

  return (
    <Container>
      <div className="user-card-infos">
        <div className="user-title">
          <h1 className="h1-title-user">Dados do usuário</h1>

          <div className="buttons">
            <Button onClick={() => navigate("/home")}>
              <i className="bi bi-arrow-counterclockwise" />
              Voltar
            </Button>

            <Button
              type="primary"
              onClick={() => navigate(`/users/${id}/edit-user`)}
            >
              <i className="bi bi-pencil-square" />
              Editar
            </Button>

            <Button className="delete-btn" onClick={() => setIsModalOpen(true)}>
              <i className="bi bi-trash3-fill" />
              Excluir
            </Button>
          </div>
        </div>

        <Modals
          id={String(id)}
          title={modalTitle("Tem certeza que deseja excluir este item ?")}
          content={"Se excluir este item, essa ação não poderá ser desfeita!"}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleConfirmUserDelete={handleConfirmUserDelete}
        />

        <div className="labels">
          <p className="p-name">Nome: </p>
          <p className="p-info">{showUser?.name}</p>
        </div>

        <div className="labels">
          <p className="p-name">Sobrenome: </p>
          <p className="p-info">{showUser?.lastname}</p>
        </div>

        <div className="labels">
          <p className="p-name">Email: </p>
          <p className="p-info">{showUser?.email}</p>
        </div>

        <div className="block-of-informations">
          <div className="labels">
            <p className="p-name">Endereço: </p>
            <p className="p-info">{showUser?.address}</p>
          </div>

          <div className="labels">
            <p className="p-name">Data de nascimento: </p>
            <p className="p-info">{formatDate(showUser?.birthday)}</p>
          </div>

          <div className="labels">
            <p className="p-name">Telefone: </p>
            <p className="p-info">{showUser?.phone}</p>
          </div>
        </div>

        <div className="block-of-informations">
          <div className="labels">
            <p className="p-name">Criado em: </p>
            <p className="p-info">{formatDate(showUser?.createdAt)}</p>
          </div>

          <div className="labels">
            <p className="p-name">Atualizado em: </p>
            <p className="p-info">{formatDate(showUser?.updatedAt)}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserCardInfosById;
