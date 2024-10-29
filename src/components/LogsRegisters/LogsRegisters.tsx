/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { formatDateTime } from "../utils";
import { GetUsersData } from "../CrudUsers/hooks/CrudUsersData";
import { loginLogsUrl } from "../Login/Hooks/LoginData";
import Container from "../Container/Container";

import "./LogsRegisters.scss";

type PROP = {
  id: number;
  username: string;
  updatedAt: string;
  createdAt: string;
  loginTime: string;
  ipAddress: string;
  userAgent: string;
  status: string;
};

const LogsRegisters = () => {
  const [logsRegisters, setLogsRegisters] = useState<PROP[]>([]);
  const [page, setPage] = useState<number>(1);

  const username = localStorage.getItem("username");
  const userIDLogged = localStorage.getItem("key");

  const sortedByRecentLogs = logsRegisters?.sort((a, b) => {
    const aTime = new Date(a.loginTime).getTime();
    const bTime = new Date(b.loginTime).getTime();
    return bTime - aTime;
  });

  const getUsersRegistersLogs = async () => {
    try {
      const dataLogs = await GetUsersData(`${loginLogsUrl}/${userIDLogged}`);
      setLogsRegisters(dataLogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersRegistersLogs();
  }, []);

  const itensPerPage = 3;
  const startIndex = (page - 1) * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const paginatedLogs = sortedByRecentLogs?.slice(startIndex, endIndex);

  return (
    <Container>
      <div className="logs-container">
        <h1>Registro de Logs</h1>

        {paginatedLogs?.map((log) => (
          <div key={log.id} className="logs-infos">
            <div className="logs-infos-div">
              <b>Usuário:</b>
              {username}
            </div>

            <div className="logs-infos-div">
              <b>User Agent:</b>
              {log.userAgent}
            </div>

            <div className="logs-infos-div">
              <b>Login:</b>
              {formatDateTime(log.loginTime)}
            </div>

            <div className="status">
              <b>Status:</b>

              <b className="status-text">
                {log.status.toLowerCase()}
                <i className="bi bi-check-circle" />
              </b>
            </div>

            <div className="logs-infos-div">
              <b>IP:</b>
              {log.ipAddress}
            </div>
          </div>
        ))}

        <Pagination
          pageSize={itensPerPage}
          onChange={(page) => setPage(page)}
          current={page}
          total={logsRegisters.length}
        />
      </div>
    </Container>
  );
};

export default LogsRegisters;
