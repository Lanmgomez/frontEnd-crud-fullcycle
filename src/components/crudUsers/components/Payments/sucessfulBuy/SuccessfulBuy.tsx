import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Container from "../../Container/Container";

import "./SuccessfulBuy.scss";

const SuccessfulBuy = () => {
  const navigate = useNavigate();

  // TODO: trazer api para informdar dados do pagamento realizado

  return (
    <Container>
      <div className="successful-container">
        <div className="payment-check">
          <i className="bi bi-check-circle" />
          <p>Pagamento efetuado com sucesso!</p>
        </div>

        <div className="summary-div">
          <div className="labels">
            <p className="p-name">Comprador: </p>
            <p className="p-info">Islan</p>
          </div>

          <div className="labels">
            <p className="p-name">Transação:</p>
            <p className="p-info">f1c94038a971f2982c61a5e5f11e6b91</p>
          </div>

          <div className="labels">
            <p className="p-name">Forma de Pagamento: </p>
            <p className="p-info">1x R$ 100,00</p>
          </div>

          <div className="labels">
            <p className="p-name">Data da compra: </p>
            <p className="p-info">20/10/2024, às 18h:40min.</p>
          </div>
        </div>

        <div className="btns-div">
          <Button className="btns-btn" onClick={() => navigate("/home")}>
            Voltar para o início
          </Button>

          <Button
            type="primary"
            className="btns-btn"
            /* onClick={{}} */
          >
            Ver minhas compras
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SuccessfulBuy;
