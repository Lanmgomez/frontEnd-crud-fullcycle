import Crud from "../../Crud";
import UserCardInfosById from "../UserCardInfosByID/UserCardInfosById";
import EditCard from "../EditCard/EditCard";
import CreateUser from "../CreateUser/CreateUser";
import Login from "../../../Login/Login";
import CreateNewAccount from "../../../Login/CreateNewAccount/CreateNewAccount";
import { LogsRegisters } from "../LogsRegisters/LogsRegisters";
import Container from "../Container/Container";

export const Routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login/create-new-user",
    element: <CreateNewAccount />,
  },
  {
    path: "/home",
    element: <Crud />,
  },
  {
    path: "/users/:id",
    element: <UserCardInfosById />,
  },
  {
    path: "/users/:id/edit-user",
    element: <EditCard />,
  },
  {
    path: "/users/logs",
    element: <LogsRegisters />,
  },
  {
    path: "/users/create-user",
    element: <CreateUser />,
  },
  {
    path: "/settings",
    element: <Container children={undefined} />,
  },
];
