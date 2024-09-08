export const loginUrl = "http://localhost:5000/login";

export const createNewAccountUrl =
  "http://localhost:5000/login/create-new-user";

export const LoginRequest = async (url: string, body: object) => {
  try {
    const response = await fetch(url, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    // Verifica se o status está fora do intervalo 2xx (200-299)
    if (!response.ok) {
      // Lança o erro com a mensagem de status e a resposta JSON
      const errorData = await response.json();
      throw new Error(
        `Error: ${response.status} - ${
          errorData.message || response.statusText
        }`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
