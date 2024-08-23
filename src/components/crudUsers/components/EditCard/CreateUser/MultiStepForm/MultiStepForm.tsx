import { useState } from "react";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";
import { Button, Steps } from "antd";

import '../CreateUser.scss';
import { PROPS_FORM } from "../../EditCard";
import { useFormikContext } from "formik";
import RegisterStep3 from "./RegisterStep3";

const { Step } = Steps;

const MultiStepForm = () => {

  const [activeStep, setActiveStep] = useState<number>(0);

  const { 
    /* validateForm, */ 
    values,
    submitForm 
  } = useFormikContext <PROPS_FORM> ();

  const steps = [
    {
      title: 'Informações Pessoais',
      content: <RegisterStep1 />,
    },
    {
      title: 'Informações de Acesso',
      content: <RegisterStep2 />,
    },
    {
      title: 'Confirmação',
      content: <RegisterStep3 values={values} />,
    }
  ];

//   const handleNextStep = async (validateForm: () => Promise <object>) => {
//     const errors = await validateForm();

//     if (Object.keys(errors).length > 0) {
//         setActiveStep(activeStep + 1);
//     };
//   };

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Steps current={activeStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">
        {steps[activeStep].content}
      </div>

      <div className="steps-action">
        {activeStep > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}

        {activeStep < steps.length - 1 && (
          <Button 
           type="primary" 
           onClick={handleNextStep}
            /*onClick={() => handleNextStep(validateForm)} */
          >
            Próximo
          </Button>
        )}

        {activeStep === steps.length - 1 && (
          <Button type="primary" onClick={submitForm}>
            Salvar
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;