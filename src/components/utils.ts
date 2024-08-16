import moment from "moment";
export type PROP = {
    id: number,
    name: string,
    lastname: string,
    email: string,
    address: string,
    birthday: string,
    phone: number,
    createdAt: string,
    updatedAt: string
};

export const formatDate = (date: string | undefined) => {
    const dateFormat = moment.utc(date).format('DD/MM/YYYY');
    return dateFormat;
};