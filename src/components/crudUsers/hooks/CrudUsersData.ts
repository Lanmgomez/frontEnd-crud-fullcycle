export const usersUrl = "http://localhost:5000/users";

export const GetUsersData = async (url: string) => {
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

export const UpdateUsersData = async (url: string, body: object) => {
    try {
        const response = await fetch(url, {
            mode: "cors",
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);
        throw error;
    }
};
