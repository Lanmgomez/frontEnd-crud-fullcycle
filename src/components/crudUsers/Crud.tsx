import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { usersUrl, GetUsersData } from "./hooks/CrudUsersData";
import UserCard from "./UserCard/UserCard";
import EmptyUsers from "./EmptyUsers/EmptyUsers";
import Container from "../Container/Container";
import SearchBar from "./SearchBar/SearchBar";

import "./Crud.scss";

const Crud = () => {
  const [showUsers, setShowUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerms, setSearchTerms] = useState([]);
  const [loading, setLoading] = useState(false);

  const itensPerPage = 6;
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

  if (searchTerms.length > 0) {
    return (
      <Container>
        <div className="crud-container">
          <h1>CRUD Todo List</h1>

          <SearchBar setSearchTerms={setSearchTerms} setLoading={setLoading} />

          {loading && <p>Carregando...</p>}

          <UserCard showUsersCrud={searchTerms} />
        </div>
      </Container>
    );
  }

  if (!searchTerms.length) {
    return (
      <Container>
        <div className="crud-container">
          <h1>CRUD Todo List</h1>

          <SearchBar setSearchTerms={setSearchTerms} />

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
  }
};

export default Crud;
