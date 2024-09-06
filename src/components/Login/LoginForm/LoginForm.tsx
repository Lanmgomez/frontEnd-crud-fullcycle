import { Form, useFormikContext } from "formik";
import { Form as FormAntd, Input, Button } from "antd";
import { PROPS_FORM } from "../Login";
import ErrorMessage from "../../crudUsers/components/ErrorMessages/ErrorMessage";
import { useNavigate } from "react-router-dom";

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

  const CreateNewAccount = (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    console.log(values);

    // submitForm();
  };

  const disabledBtn = values.password !== values.confirmPassword;

  return (
    <Form className="form">
      <span className="form-span">Usuário:</span>
      <FormAntd.Item>
        <Input
          name="userName"
          className="input-form"
          placeholder="Digite seu nome de usuário..."
          type="text"
          onChange={(e) => setFieldValue("userName", e.target.value)}
          value={values.userName}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.userName} touched={touched.userName} />

      <span className="form-span">Senha:</span>
      <FormAntd.Item>
        <Input.Password
          name="password"
          className="input-form"
          placeholder="Digite seu sobrenome..."
          type="password"
          onChange={(e) => setFieldValue("password", e.target.value)}
          value={values.password}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.password} touched={touched.password} />

      {!showLoginOrCreateNewAccountBtn && (
        <>
          <span className="form-span">Confirmar Senha:</span>
          <FormAntd.Item>
            <Input.Password
              name="confirmPassword"
              className="input-form"
              placeholder="Digite seu sobrenome..."
              type="password"
              onChange={(e) => setFieldValue("confirmPassword", e.target.value)}
              value={values.confirmPassword}
            />
          </FormAntd.Item>
          <ErrorMessage
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />
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
            disabled={disabledBtn}
          >
            Criar Conta
          </Button>
        </>
      )}
    </Form>
  );
};

export default LoginForm;
