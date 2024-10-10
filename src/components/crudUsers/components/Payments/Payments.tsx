import { Formik } from "formik";
import { Table } from "antd";
import { initialValues, dataSource, columns, PROPS_FORM } from "./utils";
import { PAYMENT_DATA_VALIDATION } from "./validation";
import Container from "../Container/Container";
import MultiStepForm from "./PaymentForm/MultiStepForm";

import "./Payments.scss";

const Payments = () => {
  const handleSubmit = (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    console.log(values);
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

        <div className="table-container">
          <h3>Resumo da compra</h3>

          <Table dataSource={dataSource} columns={columns} />

          <p>
            Valor total: <span>R$ 100,00</span>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Payments;
