import { Form as FormAntd, Input, Typography } from "antd";
import { useFormikContext } from "formik";
import { PROPS_FORM } from "../Payments";
import { MaskPhone, inputMask } from "../../utils";

import "../Payments.scss";

const { Text } = Typography;

const PaymentStep1 = () => {
  const { values, setFieldValue } = useFormikContext<PROPS_FORM>();

  const fullNameFormat = (value: string) => {
    if (!value) {
      return "";
    }

    const name = value.toLowerCase();
    return name;
  };

  return (
    <>
      <div className="form-inputs-father">
        <div className="form-input-child">
          <Text>
            Nome completo: <span className="asterisk">*</span>
          </Text>

          <FormAntd.Item>
            <Input
              name="fullName"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              onChange={(e) => setFieldValue("fullName", e.target.value)}
              value={fullNameFormat(values.fullName)}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <Text>
            Email: <span className="asterisk">*</span>
          </Text>

          <FormAntd.Item>
            <Input
              name="email"
              className="input-form"
              placeholder="Digite seu email..."
              type="text"
              onChange={(e) => setFieldValue("email", e.target.value)}
              value={values.email}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <Text>
            CPF ou CNPJ: <span className="asterisk">*</span>
          </Text>

          <FormAntd.Item>
            <Input
              name="cpfOrCnpj"
              className="input-form"
              placeholder="Digite seu CPF ou CNPJ..."
              type="text"
              maxLength={18}
              onChange={(e) => setFieldValue("cpfOrCnpj", e.target.value)}
              value={inputMask(values.cpfOrCnpj)}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <Text>
            Celular com DDD: <span className="asterisk">*</span>
          </Text>

          <FormAntd.Item>
            <Input
              name="phone"
              className="input-form"
              placeholder="Digite seu número de contato..."
              type="text"
              maxLength={15}
              onChange={(e) => setFieldValue("phone", e.target.value)}
              value={MaskPhone(values.phone)}
            />
          </FormAntd.Item>
        </div>
      </div>
    </>
  );
};

export default PaymentStep1;
