import axios from "axios";

export const usersUrl = "http://localhost:5000/users/";

const GetUsersData = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default GetUsersData;