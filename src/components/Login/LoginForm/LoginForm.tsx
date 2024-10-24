import { Form as FormikForm, useFormikContext } from "formik";
import { Form, Input, Button, Typography } from "antd";
import { PROPS_FORM } from "../Login";
import { createNewAccountUrl, LoginRequest } from "../Hooks/LoginData";
import { handleErrorNotification, SetInLocalStorageData } from "../../utils";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../ErrorMessages/ErrorMessage";

import "../Login.scss";

const { Text: Title } = Typography;

type PROP = {
  showLoginOrCreateNewAccountBtn: boolean;
  setshowLoginOrCreateNewAccountBt: (_value: boolean) => void;
};

const LoginForm = ({
  showLoginOrCreateNewAccountBtn,
  setshowLoginOrCreateNewAccountBt,
}: PROP) => {
  const navigate = useNavigate();

  const { values, errors, touched, setFieldValue, submitForm } =
    useFormikContext<PROPS_FORM>();

  const RedirectToCreateNewAccount = () => {
    setshowLoginOrCreateNewAccountBt(false);
    navigate("/login/create-new-user");
  };

  const CreateNewAccount = async (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    const { userName, password } = values;

    try {
      await LoginRequest(`${createNewAccountUrl}`, { userName, password });

      SetInLocalStorageData(values.userName);
      navigate("/home");
    } catch (error) {
      console.log(error);

      handleErrorNotification("Erro ao criar conta", "Usuário já existe");
    }
  };

  const ValidatePassword = (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    if (values.password !== values.confirmPassword) {
      return (
        <p className="different-passwords-msg">As senhas devem ser iguais</p>
      );
    }
  };

  const noUserNameValue = !values.userName;
  const passwordNotMatch = values.password !== values.confirmPassword;

  return (
    <FormikForm className="form">
      <Title className="form-span">Usuário:</Title>

      <Form.Item>
        <Input
          name="userName"
          className="input-form"
          placeholder="Digite seu nome de usuário..."
          type="text"
          onChange={(e) => setFieldValue("userName", e.target.value)}
          value={values.userName}
        />
      </Form.Item>
      <ErrorMessage error={errors.userName} touched={touched.userName} />

      <Title className="form-span">Senha:</Title>

      <Form.Item>
        <Input.Password
          name="password"
          className="input-form"
          placeholder="Digite seu sobrenome..."
          type="password"
          onChange={(e) => setFieldValue("password", e.target.value)}
          value={values.password}
        />
      </Form.Item>
      <ErrorMessage error={errors.password} touched={touched.password} />

      {!showLoginOrCreateNewAccountBtn && (
        <>
          <Title className="form-span">Confirmar Senha:</Title>

          <Form.Item>
            <Input.Password
              name="confirmPassword"
              className="input-form"
              placeholder="Digite seu sobrenome..."
              type="password"
              onChange={(e) => setFieldValue("confirmPassword", e.target.value)}
              value={values.confirmPassword}
            />
          </Form.Item>
          {ValidatePassword(values)}
        </>
      )}

      {showLoginOrCreateNewAccountBtn && (
        <>
          <Button type="primary" className="login-btns" onClick={submitForm}>
            Entrar
          </Button>

          <Button className="login-btns" onClick={RedirectToCreateNewAccount}>
            Criar Conta
          </Button>
        </>
      )}

      {!showLoginOrCreateNewAccountBtn && (
        <>
          <Button className="login-btns" onClick={() => navigate("/")}>
            Voltar
          </Button>

          <Button
            type="primary"
            className="login-btns"
            onClick={() => CreateNewAccount(values)}
            disabled={noUserNameValue ? noUserNameValue : passwordNotMatch}
          >
            Criar Conta
          </Button>
        </>
      )}
    </FormikForm>
  );
};

export default LoginForm;
