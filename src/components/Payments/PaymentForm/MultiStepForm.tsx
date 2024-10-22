import { Button, Steps } from "antd";
import { Form, useFormikContext } from "formik";
import { useState } from "react";
import PaymentStep1 from "./PaymentStep1";
import PaymentStep2 from "./PaymentStep2";
import PaymentStep3 from "./PaymentStep3";
import { PROPS_FORM } from "../Payments";

import "../Payments.scss";

const { Step } = Steps;

const MultiStepForm = () => {
  const { values, submitForm } = useFormikContext<PROPS_FORM>();

  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Identificação",
      content: <PaymentStep1 />,
    },
    {
      title: "Endereço",
      content: <PaymentStep2 />,
    },
    {
      title: "Pagamento",
      content: <PaymentStep3 />,
    },
  ];

  const disabledStep1 =
    !values.fullName || !values.email || !values.cpfOrCnpj || !values.phone;

  const disabledStep2 =
    !values.cep ||
    !values.street ||
    !values.addressNumber ||
    !values.neighborhood ||
    !values.city ||
    !values.uf;

  const disabledIfNoPaymentData =
    !values.creditCardNumber ||
    !values.creditCardName ||
    !values.expirationCard ||
    !values.cvv ||
    !values.paymentFormInstallment;

  return (
    <Form className="payment-form">
      {/** Título */}
      <div className="payment-card-title">
        <i className="bi bi-cash-coin" />
        <p>
          Vendido por:<span>Lorem</span>
        </p>
      </div>

      {/** Steps */}
      <div className="steps-container">
        <Steps current={activeStep} size="small">
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>

        <div className="steps-content">{steps[activeStep].content}</div>

        <div className="steps-action">
          {activeStep < steps.length - 1 && (
            <div className="steps-action-btns">
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Voltar
              </Button>

              <Button
                type="primary"
                onClick={() => setActiveStep(activeStep + 1)}
                disabled={activeStep === 0 ? disabledStep1 : disabledStep2}
              >
                Próximo
              </Button>
            </div>
          )}

          {activeStep === steps.length - 1 && (
            <div className="steps-action-btns">
              <Button
                style={{ margin: "20px 0 0 8px" }}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                Voltar
              </Button>

              <Button
                type="primary"
                style={{ margin: "20px 0 0 8px" }}
                onClick={submitForm}
                disabled={disabledIfNoPaymentData}
              >
                Salvar
              </Button>
            </div>
          )}
        </div>
      </div>
    </Form>
  );
};

export default MultiStepForm;
