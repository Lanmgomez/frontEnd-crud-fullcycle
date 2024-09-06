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

export const SetInLocalStorageData = (username: string) => {
  localStorage.setItem("username", username);
};
