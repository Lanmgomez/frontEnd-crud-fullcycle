import { Formik } from "formik";
import { PAYMENT_DATA_VALIDATION } from "./PaymentForm/validation/validation";
import { payment_url, PostPayment } from "./hooks/PaymentData";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import MultiStepForm from "./PaymentForm/MultiStepForm";
import Summary from "./Summary/Summary";

import "./Payments.scss";

export type PROPS_FORM = {
  fullName: string;
  email: string;
  cpfOrCnpj: string;
  phone: string;
  cep: string;
  street: string;
  addressNumber: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  creditCardNumber: string;
  creditCardName: string;
  expirationCard: string;
  cvv: string;
  paymentFormInstallment: string;
};

const initialValues: PROPS_FORM = {
  fullName: "",
  email: "",
  cpfOrCnpj: "",
  phone: "",
  cep: "",
  street: "",
  addressNumber: "",
  complement: "",
  neighborhood: "",
  city: "",
  uf: "",
  creditCardNumber: "",
  creditCardName: "",
  expirationCard: "",
  cvv: "",
  paymentFormInstallment: "",
};

const Payments = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    const data = {
      ...values,
      UserIdentification: {
        fullName: values.fullName,
        email: values.email,
        cpfOrCnpj: values.cpfOrCnpj,
        phone: values.phone,
      },
      UserAddress: {
        street: values.street,
        addressNumber: values.addressNumber,
        complement: values.complement,
        neighborhood: values.neighborhood,
        city: values.city,
        uf: values.uf,
        zipCode: values.cep,
      },
      PaymentForm: {
        paymentFormInstallment: values.paymentFormInstallment,
      },
    };

    try {
      await PostPayment(payment_url, data);

      navigate("/users/successul-payment");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1 className="payments-h1-title">Pagamentos</h1>
      <div className="payments-container">
        <Formik
          initialValues={initialValues}
          validationSchema={PAYMENT_DATA_VALIDATION}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <MultiStepForm />
        </Formik>

        <Summary />
      </div>
    </Container>
  );
};

export default Payments;
