import axios from "axios";

export const usersUrl = "http://localhost:5000/crudusers";

export const searchUsersUrl = "http://localhost:5000/crudusers/search?search=";

const GetUsersData = async (url: string) => {
  try {
    const response = await axios({
      method: "GET",
      url: url,
      headers: { "Content-Type": "application/json" },
      withCredentials: false, // mudar quando enviar cookies e credenciais
    });

    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const UpdateUsersData = async (url: string, body: object) => {
  try {
    const response = await axios({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      url: url,
      data: body,
      withCredentials: false,
    });

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const DeleteUser = async (url: string, body: object) => {
  try {
    const response = await axios(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: body,
      withCredentials: false,
    });

    return await response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const CreateNewUser = async (url: string, body: object) => {
  try {
    const response = await axios(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: body,
      withCredentials: false,
    });

    return await response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { GetUsersData, UpdateUsersData, DeleteUser, CreateNewUser };
