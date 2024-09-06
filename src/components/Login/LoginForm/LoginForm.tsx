import { Form, useFormikContext } from "formik";
import { Form as FormAntd, Input, Button } from "antd";
import { PROPS_FORM } from "../Login";
import ErrorMessage from "../../crudUsers/components/ErrorMessages/ErrorMessage";

const LoginForm = () => {
  const { values, errors, touched, setFieldValue, submitForm } =
    useFormikContext<PROPS_FORM>();

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

      <Button type="primary" className="login-btns" onClick={submitForm}>
        Entrar
      </Button>

      <Button className="login-btns" onClick={() => {}}>
        Criar Conta
      </Button>
    </Form>
  );
};

export default LoginForm;
