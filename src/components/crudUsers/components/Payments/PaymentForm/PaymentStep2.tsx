import { Form as FormAntd, Input, Select } from "antd";
import { PROPS_FORM, uf_list } from "../utils";
import { useFormikContext } from "formik";

import "../Payments.scss";

const { Option } = Select;
const PaymentStep2 = () => {
  const { values, setFieldValue } = useFormikContext<PROPS_FORM>();

  const cepInputMask = (value: string) => {
    let mask = value.replace(/\D/g, "");
    mask = mask.replace(/(\d{5})(\d{3})/, "$1-$2");

    const maskValue = mask.trim();
    return maskValue;
  };

  return (
    <>
      <div className="cep-input">
        <span>
          CEP: <span className="asterisk">*</span>
        </span>
        <FormAntd.Item>
          <Input
            name="cep"
            className="input-form"
            placeholder="Digite seu nome..."
            type="text"
            maxLength={9}
            onChange={(e) => setFieldValue("cep", e.target.value)}
            value={cepInputMask(values.cep)}
          />
        </FormAntd.Item>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            Rua: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="address"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              onChange={(e) => setFieldValue("address", e.target.value)}
              value={values.address}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            Número: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="addressNumber"
              className="input-form"
              placeholder="Digite seu email..."
              type="text"
              onChange={(e) => setFieldValue("addressNumber", e.target.value)}
              value={values.addressNumber}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>Complemento:</span>
          <FormAntd.Item>
            <Input
              name="complement"
              className="input-form"
              placeholder="Digite seu CPF ou CNPJ..."
              type="text"
              onChange={(e) => setFieldValue("complement", e.target.value)}
              value={values.complement}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            Bairro: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="neighborhood"
              className="input-form"
              placeholder="Digite seu número de contato..."
              type="text"
              onChange={(e) => setFieldValue("neighborhood", e.target.value)}
              value={values.neighborhood}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            Cidade: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="city"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              onChange={(e) => setFieldValue("city", e.target.value)}
              value={values.city}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            UF: <span className="asterisk">*</span>
          </span>
          <Select
            placeholder="Selecione uma UF..."
            onChange={(value) => setFieldValue("uf", value)}
            value={values.uf}
          >
            {uf_list.map((uf) => (
              <Option key={uf.id} value={uf.name}>
                {uf.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default PaymentStep2;
