import { PROP } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import "../Crud.scss";

type PROP_COMPONENT = {
  showUsersCrud: PROP[];
};
const UserCard = ({ showUsersCrud }: PROP_COMPONENT) => {
  const navigate = useNavigate();

  const SeeMoreDetails = (id: number) => () => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="users-crud-container">
      {showUsersCrud?.map((user: PROP) => (
        <div key={user.id} className="user-card">
          <div className="block-of-informations">
            <div className="labels">
              <p className="p-name">Nome: </p>
              <p className="p-info">{user.name}</p>
            </div>

            <div className="labels">
              <p className="p-name">Sobrenome: </p>
              <p className="p-info">{user.lastname}</p>
            </div>

            <div className="labels">
              <p className="p-name">Status: </p>
              <p className="p-info">Ativo</p>
            </div>
          </div>

          <div>
            <Button
              type="primary"
              className="btn-see-more-details"
              onClick={SeeMoreDetails(user.id)}
            >
              Ver Mais
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
