import { Formik } from "formik";
import LoginForm from "../LoginForm/LoginForm";

import "../Login.scss";
import { useState } from "react";

type PROPS_FORM = {
  userName: string;
  password: string;
};

const initialValues: PROPS_FORM = {
  userName: "",
  password: "",
};
const CreateNewAccount = () => {
  const [showLoginOrCreateNewAccountBtn, setshowLoginOrCreateNewAccountBt] =
    useState<boolean>(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <hgroup>
          <h1>Crie uma conta</h1>
          <h3>É simples e rápido</h3>
        </hgroup>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <LoginForm
            showLoginOrCreateNewAccountBtn={showLoginOrCreateNewAccountBtn}
            setshowLoginOrCreateNewAccountBt={setshowLoginOrCreateNewAccountBt}
          />
        </Formik>
      </div>
    </div>
  );
};

export default CreateNewAccount;
