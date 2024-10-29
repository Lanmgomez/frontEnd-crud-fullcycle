import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";

import "../Crud.scss";

const { Search } = Input;

function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className="create-new-user-and-search-btn">
      <Search
        style={{ width: 400 }}
        placeholder="Pesquisar Usuários..."
        onSearch={(value) => console.log(value)}
        enterButton
      />

      <Button
        className="add-user-btn"
        style={{ height: "40px" }}
        type="primary"
        onClick={() => navigate("/users/create-user")}
      >
        Adicionar Usuário
      </Button>
    </div>
  );
}

export default SearchBar;
