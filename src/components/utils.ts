import moment from "moment";
import { notification } from "antd";
export type PROP = {
  id: number;
  name: string;
  lastname: string;
  email: string;
  address: string;
  birthday: string;
  phone: number;
  createdAt: string;
  updatedAt: string;
};

export const formatDate = (date: string | undefined) => {
  const dateFormat = moment.utc(date).format("DD/MM/YYYY");
  return dateFormat;
};

export const handleSuccessNotification = (
  message: string,
  description: string
) => {
  notification.open({
    type: "success",
    message: message,
    description: description,
  });
};

export const handleErrorNotification = (
  message: string,
  description: string
) => {
  notification.open({
    type: "error",
    message: message,
    description: description,
  });
};

export const MaskPhone = (phone: string) => {
  switch (true) {
    case phone.length === 11:
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

    case phone.length === 10:
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");

    default:
      return phone;
  }
};

export const SetInLocalStorageData = async (username: string) => {
  localStorage.setItem("username", username);

  // 01 - buscar usuários registrados
  const usersRegistered = await fetch("http://localhost:5000/users")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  // 02 - achar o id do usuaário logado
  const loggedUser = localStorage.getItem("username");
  const findUserID = usersRegistered?.find(
    (users: { username: string }) => users.username === loggedUser
  );

  // 03 - adicionar o id do usuário logado ao storage
  localStorage.setItem("key", findUserID?.id);
};

export const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);

  // Pegue as partes da data e hora
  const day = String(date.getDate()).padStart(2, "0");
  // Meses são baseados em 0, por isso o +1
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Formate a string como "18h:57min, em 07/09/2024"
  return `${hours}h:${minutes}min, em ${day}/${month}/${year}.`;
};

// Verifica se a requisição PUT ou PATCH retorna dados
const parseJSONResponse = async (response: Response) => {
  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  }
  return {}; // Retorna um objeto vazio se não houver JSON
};

export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error("Erro na requisição: " + response.statusText);
  }
  return await parseJSONResponse(response);
};
