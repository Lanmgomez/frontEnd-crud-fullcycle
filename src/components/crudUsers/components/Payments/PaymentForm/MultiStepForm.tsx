import { Button, Steps } from "antd";
import { Form } from "formik";
import { useState } from "react";
import PaymentStep1 from "./PaymentStep1";

import "../Payments.scss";

const { Step } = Steps;

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Identificação",
      content: <PaymentStep1 />,
    },
    {
      title: "Endereço",
      content: <p>Teste 2</p>,
    },
    {
      title: "Pagamento",
      content: <p>Teste 3</p>,
    },
  ];

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

              {/* <Modals
              title={modalTitle("Você não salvou as informações.")}
              content={"Tem certeza que deseja sair sem salvar?"}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            /> */}

              <Button
                type="primary"
                onClick={() => setActiveStep(activeStep + 1)}
                //   disabled={
                //     activeStep === 0 ? disabledStep1 : disabledStep2
                //   }
              >
                Próximo
              </Button>
            </div>
          )}

          {activeStep === steps.length - 1 && (
            <Button
              type="primary"
              style={{ margin: "0 0 0 8px" }}
              // onClick={submitForm}
            >
              Salvar
            </Button>
          )}
        </div>
      </div>
    </Form>
  );
};

export default MultiStepForm;
