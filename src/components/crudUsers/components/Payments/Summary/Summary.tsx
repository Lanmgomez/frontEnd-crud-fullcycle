import { Table } from "antd";

const Summary = () => {
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
    <div className="table-container">
      <div>
        <h3>Resumo da compra</h3>

        <Table dataSource={dataSource} columns={columns} />

        <p>
          Valor total: <span>R$ 100,00</span>
        </p>
      </div>

      <div className="safe-conection-msg">
        <i className="bi bi-lock-fill" />
        Você está em uma conexão segura
      </div>
    </div>
  );
};

export default Summary;
