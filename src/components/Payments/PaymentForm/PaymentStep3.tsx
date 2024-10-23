import { Form as FormAntd, Input, Select, Typography } from "antd";
import { PROPS_FORM } from "../Payments";
import { useFormikContext } from "formik";

import "../Payments.scss";

const { Option } = Select;
const { Text } = Typography;

const PaymentStep3 = () => {
  const { values, setFieldValue } = useFormikContext<PROPS_FORM>();

  const payment_method_list = [
    { id: 1, value: "1x R$ 100,00" },
    { id: 2, value: "2x R$ 50,00" },
    { id: 3, value: "3x R$ 33,33" },
    { id: 4, value: "4x R$ 25,00" },
    { id: 5, value: "5x R$ 20,00" },
    { id: 6, value: "6x R$ 16,66" },
    { id: 7, value: "7x R$ 13,33" },
    { id: 8, value: "8x R$ 12,50" },
    { id: 9, value: "9x R$ 11,11" },
    { id: 10, value: "10x R$ 10,00" },
    { id: 11, value: "11x R$ 9,09" },
    { id: 12, value: "12x R$ 8,33" },
  ];

  const creditCardInputMask = (value: string) => {
    if (!value) {
      return "";
    }

    const mask = value.replace(/\D/g, "");

    const maskValue = mask
      .replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4")
      .trim();

    return maskValue;
  };

  const creditCardName = (value: string) => {
    if (!value) {
      return "";
    }

    const cardName = value.toUpperCase();
    return cardName;
  };

  return (
    <>
      <div className="cep-input">
        <Text>
          Número do cartão: <span className="asterisk">*</span>
        </Text>

        <FormAntd.Item>
          <Input
            name="creditCardNumber"
            className="input-form"
            placeholder="Digite seu nome..."
            type="text"
            maxLength={19}
            onChange={(e) => setFieldValue("creditCardNumber", e.target.value)}
            value={creditCardInputMask(values.creditCardNumber)}
          />
        </FormAntd.Item>
      </div>

      <div className="cep-input">
        <Text>
          Nome (Igual no cartão): <span className="asterisk">*</span>
        </Text>

        <FormAntd.Item>
          <Input
            name="creditCardName"
            className="input-form"
            placeholder="Digite seu nome..."
            type="text"
            onChange={(e) => setFieldValue("creditCardName", e.target.value)}
            value={creditCardName(values.creditCardName)}
          />
        </FormAntd.Item>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <Text>
            Validade: <span className="asterisk">*</span>
          </Text>

          <FormAntd.Item>
            <Input
              name="expirationCard"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              maxLength={7}
              onChange={(e) => setFieldValue("expirationCard", e.target.value)}
              value={values.expirationCard}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <Text>
            CVV: <span className="asterisk">*</span>
          </Text>

          <FormAntd.Item>
            <Input
              name="cvv"
              className="input-form"
              placeholder="Digite seu email..."
              type="text"
              maxLength={3}
              onChange={(e) => setFieldValue("cvv", e.target.value)}
              value={values.cvv}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="cep-input">
        <Text>
          Selecionar parcelas: <span className="asterisk">*</span>
        </Text>

        <Select
          placeholder="Selecione o número de parcelas..."
          onChange={(value) => setFieldValue("paymentFormInstallment", value)}
          value={values.paymentFormInstallment}
        >
          {payment_method_list.map((pay) => (
            <Option key={pay.id} value={pay.value}>
              {pay.value}
            </Option>
          ))}
        </Select>
      </div>
    </>
  );
};

export default PaymentStep3;
