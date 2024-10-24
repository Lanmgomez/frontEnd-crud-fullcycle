import * as Yup from "yup";
import { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginRequest, loginUrl } from "./Hooks/LoginData";
import { handleErrorNotification, SetInLocalStorageData } from "../utils";
import LoginForm from "./LoginForm/LoginForm";
import Container from "../Container/Container";
import Image from "../../assets/LoginBackground.svg";

import "./Login.scss";

export type PROPS_FORM = {
  userName: string;
  password: string;
  confirmPassword?: string;
};

const initialValues: PROPS_FORM = {
  userName: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("O nome é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});
const Login = () => {
  const navigate = useNavigate();

  const [showLoginOrCreateNewAccountBtn, setshowLoginOrCreateNewAccountBt] =
    useState<boolean>(true);

  const LoginHandler = async (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    try {
      await LoginRequest(`${loginUrl}`, values);

      SetInLocalStorageData(values.userName);
      navigate("/home");
    } catch (error) {
      console.log(error);

      handleErrorNotification(
        "Erro ao logar",
        "Dados incorretos, confirme os dados e tente novamente!"
      );
    }
  };

  return (
    <Container>
      <div className="login-container">
        <img
          // width={"100%"}
          // height={"100%"}
          className="login-image"
          src={Image}
          alt="login-image"
        />

        <div className="login-card">
          <hgroup>
            <h1>Login</h1>
            <h2>Entre ou cadastre-se</h2>
          </hgroup>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={LoginHandler}
            enableReinitialize
          >
            <LoginForm
              showLoginOrCreateNewAccountBtn={showLoginOrCreateNewAccountBtn}
              setshowLoginOrCreateNewAccountBt={
                setshowLoginOrCreateNewAccountBt
              }
            />
          </Formik>
        </div>
      </div>
    </Container>
  );
};

export default Login;
