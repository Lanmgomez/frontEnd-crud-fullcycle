import { useState, useEffect } from "react";
import { usersUrl, GetUsersData } from "./hooks/CrudUsersData";

import "./Crud.scss";
import UserCard from "./components/UserCard";
import EmptyUsers from "./components/EmptyUsers/EmptyUsers";
import { Pagination } from "antd";
import Container from "./components/Container/Container";

const Crud = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [page, setPage] = useState(1);

  const itensPerPage = 3;
  const startIndex = (page - 1) * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const paginatedUsersCrud = showUsers.slice(startIndex, endIndex);

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

        <UserCard showUsersCrud={paginatedUsersCrud} />
        <Pagination
          pageSize={3}
          onChange={(page) => setPage(page)}
          current={page}
          total={showUsers.length}
        />
      </div>
    </Container>
  );
};

export default Crud;
