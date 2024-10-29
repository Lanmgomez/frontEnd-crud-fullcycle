import { useState, useEffect } from "react";
import { Pagination, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { usersUrl, GetUsersData } from "./hooks/CrudUsersData";
import { AudioOutlined } from "@ant-design/icons";
import UserCard from "./UserCard/UserCard";
import EmptyUsers from "./EmptyUsers/EmptyUsers";
import Container from "../Container/Container";

import "./Crud.scss";

const { Search } = Input;

const Crud = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const itensPerPage = 6;
  const startIndex = (page - 1) * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const paginatedUsersCrud = showUsers.slice(startIndex, endIndex);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const fetchDataUsersCrud = async () => {
    const data = await GetUsersData(usersUrl);

    if (data) {
      setShowUsers(data);
      return;
    }
  };

  useEffect(() => {
    fetchDataUsersCrud();
  }, []);

  if (showUsers.length === 0) {
    return <EmptyUsers />;
  }

  return (
    <Container>
      <div className="crud-container">
        <h1>CRUD Todo List</h1>

        <div className="create-new-user-and-search-btn">
          <Search
            style={{ width: 500 }}
            placeholder="Pesquisar Usuários..."
            onSearch={(value) => console.log(value)}
            suffix={suffix}
            enterButton
          />

          <Button
            style={{ height: "40px" }}
            type="primary"
            onClick={() => navigate("/users/create-user")}
          >
            Adicionar Usuário
          </Button>
        </div>

        <UserCard showUsersCrud={paginatedUsersCrud} />

        <Pagination
          pageSize={6}
          onChange={(page) => setPage(page)}
          current={page}
          total={showUsers.length}
        />
      </div>
    </Container>
  );
};

export default Crud;
