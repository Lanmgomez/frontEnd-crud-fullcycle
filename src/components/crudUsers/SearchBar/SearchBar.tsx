import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";
import { GetUsersData, searchUsersUrl } from "../hooks/CrudUsersData";

import "../Crud.scss";

const { Search } = Input;

type PROP = {
  setSearchTerms: (_value: never[]) => void;
  setLoading?: (_value: boolean) => void;
};

function SearchBar({ setSearchTerms, setLoading }: PROP) {
  const navigate = useNavigate();

  const handleSearch = async (value: string) => {
    if (!value) {
      return;
    }

    setLoading?.(true);

    try {
      const data = await GetUsersData(`${searchUsersUrl}${value}`);
      setSearchTerms(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading?.(false);
    }
  };

  return (
    <div className="create-new-user-and-search-btn">
      <Search
        style={{ width: 400 }}
        placeholder="Pesquisar Usuários..."
        onSearch={(value) => handleSearch(value)}
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
