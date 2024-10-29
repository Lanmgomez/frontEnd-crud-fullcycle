import axios from "axios";

export const loginUrl = "http://localhost:5000/login";
export const loginLogsUrl = "http://localhost:5000/login";

export const createNewAccountUrl =
  "http://localhost:5000/login/create-new-user";

const LoginRequest = async (url: string, body: object) => {
  try {
    const response = await axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: url,
      data: body,
      withCredentials: false, // mudar quando enviar cookies e credenciais
    });

    if (response.status < 200 || response.status > 300) {
      throw new Error(
        `Error: ${response.status} - ${
          response.data.message || response.statusText
        }`
      );
    }

    return await response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { LoginRequest };
