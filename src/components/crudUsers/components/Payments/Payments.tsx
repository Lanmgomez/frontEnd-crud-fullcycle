import { Formik } from "formik";
import Container from "../Container/Container";
import MultiStepForm from "./PaymentForm/MultiStepForm";
import { Table } from "antd";

import "./Payments.scss";

const Payments = () => {
  const dataSource = [
    {
      key: "1",
      description: "Diversos",
      amount: "1",
      unitValue: "R$ 100,00",
      age: 32,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Descrição",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Quantidade",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Valor unitário",
      dataIndex: "unitValue",
      key: "unitValue",
    },
  ];

  return (
    <Container>
      <h1 className="payments-h1-title">Pagamentos</h1>
      <div className="payments-container">
        <Formik
          initialValues={{}}
          validationSchema={{}}
          onSubmit={(values) => {
            console.log(values);
          }}
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
