import Crud from "../CrudUsers/Crud";
import UserCardInfosById from "../CrudUsers/UserCardInfosByID/UserCardInfosById";
import EditCard from "../CrudUsers/EditCard/EditCard";
import CreateUser from "../CrudUsers/CreateUser/CreateUser";
import Login from "../Login/Login";
import CreateNewAccount from "../Login/CreateNewAccount/CreateNewAccount";
import LogsRegisters from "../LogsRegisters/LogsRegisters";
import Container from "../Container/Container";
import Payments from "../Payments/Payments";
import SuccessfulBuy from "../Payments/sucessfulBuy/SuccessfulBuy";

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
  {
    path: "/users/payments",
    element: <Payments />,
  },
  // TODO : Finish payments
  {
    path: "/users/successul-payment",
    element: <SuccessfulBuy />,
  },
];
