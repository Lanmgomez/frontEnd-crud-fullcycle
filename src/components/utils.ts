import moment from "moment";
import { notification } from 'antd';
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

export const handleSuccessNotification = (message: string, description: string) => {
    notification.open({
        type: 'success',
        message: message,
        description: description,
    });
};

export const handleErrorNotification = (message: string, description: string) => {
    notification.open({
        type: 'error',
        message: message,
        description: description,
    });
};
