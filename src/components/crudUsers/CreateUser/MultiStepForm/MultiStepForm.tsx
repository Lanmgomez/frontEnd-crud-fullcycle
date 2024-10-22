import { useState } from "react";
import { Button, Steps } from "antd";
import { useFormikContext } from "formik";
import { PROPS_FORM } from "../../EditCard/EditCard";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";
import RegisterStep3 from "./RegisterStep3";
import Modals from "../../Modals/Modals";

import "../CreateUser.scss";

const { Step } = Steps;

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { values, submitForm } = useFormikContext<PROPS_FORM>();

  const steps = [
    {
      title: "Informações Pessoais",
      content: <RegisterStep1 />,
    },
    {
      title: "Informações de Acesso",
      content: <RegisterStep2 />,
    },
    {
      title: "Confirmação",
      content: <RegisterStep3 values={values} />,
    },
  ];

  const disabledStep1 = !values.name || !values.lastname || !values.birthday;
  const disabledStep2 = !values.email || !values.phone || !values.address;

  const modalTitle = (title: string) => {
    return (
      <div className="modal-title">
        <i className="bi bi-exclamation-circle-fill" />
        <p className="p-modal-title">{title}</p>
      </div>
    );
  };

  return (
    <div className="steps-container">
      <Steps current={activeStep} size="small">
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[activeStep].content}</div>

      <div className="steps-action">
        {activeStep > 0 && (
          <Button onClick={() => setActiveStep(activeStep - 1)}>Voltar</Button>
        )}

        {activeStep < steps.length - 1 && (
          <div>
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => setIsModalOpen(true)}
            >
              Cancelar
            </Button>

            <Modals
              title={modalTitle("Você não salvou as informações.")}
              content={"Tem certeza que deseja sair sem salvar?"}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />

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
          <Button
            type="primary"
            style={{ margin: "0 0 0 8px" }}
            onClick={submitForm}
          >
            Salvar
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
