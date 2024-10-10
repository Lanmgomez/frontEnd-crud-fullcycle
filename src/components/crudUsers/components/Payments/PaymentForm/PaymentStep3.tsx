import { Form as FormAntd, Input, Select } from "antd";

import "../Payments.scss";
import { payment_method_list, PROPS_FORM } from "../utils";
import { useFormikContext } from "formik";

const { Option } = Select;

const PaymentStep3 = () => {
  const { values, setFieldValue } = useFormikContext<PROPS_FORM>();

  const creditCardInputMask = (value: string) => {
    let mask = value.replace(/\D/g, "");
    mask = mask.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");

    const maskValue = mask.trim();
    return maskValue;
  };

  return (
    <>
      <div className="cep-input">
        <span>
          Número do cartão: <span className="asterisk">*</span>
        </span>
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
        <span>
          Nome (Igual no cartão): <span className="asterisk">*</span>
        </span>
        <FormAntd.Item>
          <Input
            name="creditCardName"
            className="input-form"
            placeholder="Digite seu nome..."
            type="text"
            onChange={(e) => setFieldValue("creditCardName", e.target.value)}
            value={values.creditCardName}
          />
        </FormAntd.Item>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            Validade: <span className="asterisk">*</span>
          </span>
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
          <span>
            CVV: <span className="asterisk">*</span>
          </span>
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
        <span>
          Selecionar parcelas: <span className="asterisk">*</span>
        </span>
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
