// import { handleResponse } from "../../utils";

export const payment_url = "http://localhost:5000/payments";
export const uf_list_url = "http://localhost:5000/payments/uf-list";

export const via_cep_url = "https://viacep.com.br/ws/";

export const GetData = async (url: string) => {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PostPayment = async (url: string, body: object) => {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // return await handleResponse(response);
    return await response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
