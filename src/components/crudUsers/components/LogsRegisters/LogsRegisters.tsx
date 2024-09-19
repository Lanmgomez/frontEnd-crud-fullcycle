/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { GetUsersData, loginLogsUrl } from "../../hooks/CrudUsersData";

import "./LogsRegisters.scss";
import { formatDateTime } from "../../../utils";
import { Pagination } from "antd";

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

export const LogsRegisters = () => {
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
    <div className="logs-container">
      <h1>Registro de Logs</h1>

      {paginatedLogs?.map((log) => (
        <div key={log.id} className="logs-infos">
          <p>
            <b>Usuário:</b> {username}
          </p>
          <p>
            <b>User Agent:</b> {log.userAgent}
          </p>
          <p>
            <b>Login:</b> {formatDateTime(log.loginTime)}
          </p>
          <p>
            <b>Status:</b> {log.status}
          </p>
          <p>
            <b>IP:</b> {log.ipAddress}
          </p>
        </div>
      ))}
      <Pagination
        pageSize={itensPerPage}
        onChange={(page) => setPage(page)}
        current={page}
        total={logsRegisters.length}
      />
    </div>
  );
};
