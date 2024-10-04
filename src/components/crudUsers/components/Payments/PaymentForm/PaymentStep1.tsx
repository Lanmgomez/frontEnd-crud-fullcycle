import { Form as FormAntd, Input } from "antd";

import "../Payments.scss";

const PaymentStep1 = () => {
  return (
    <>
      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            Nome completo: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="name"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              //   onChange={(e) => setFieldValue("name", e.target.value)}
              //   value={values.name}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            Email: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="email"
              className="input-form"
              placeholder="Digite seu email..."
              type="text"
              //   onChange={(e) => setFieldValue("name", e.target.value)}
              //   value={values.name}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            CPF ou CNPJ: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="cpf-or-cnpj"
              className="input-form"
              placeholder="Digite seu CPF ou CNPJ..."
              type="text"
              //   onChange={(e) => setFieldValue("name", e.target.value)}
              //   value={values.name}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            Celular com DDD: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="phone"
              className="input-form"
              placeholder="Digite seu número de contato..."
              type="text"
              //   onChange={(e) => setFieldValue("name", e.target.value)}
              //   value={values.name}
            />
          </FormAntd.Item>
        </div>
      </div>
    </>
  );
};

export default PaymentStep1;
