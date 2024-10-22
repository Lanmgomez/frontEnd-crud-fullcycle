import moment from "moment";
import { PROPS_FORM } from "../../EditCard/EditCard";

type PROP = {
  values: PROPS_FORM;
};

const RegisterStep3 = ({ values }: PROP) => {
  const formattedBirth = moment.utc(values.birthday).format("DD/MM/YYYY");

  return (
    <div>
      <h3>Confirme seus dados</h3>
      <div style={{ borderBottom: "1px solid gray" }}>
        <p>
          Nome: <strong>{values.name}</strong>
        </p>
        <p>
          Sobrenome: <strong>{values.lastname}</strong>
        </p>
        <p>
          Data de nascimento: <strong>{formattedBirth}</strong>
        </p>
      </div>

      <div>
        <p>
          Email: <strong>{values.email}</strong>
        </p>
        <p>
          Telefone: <strong>{values.phone}</strong>
        </p>
        <p>
          Endereço: <strong>{values.address}</strong>
        </p>
      </div>
    </div>
  );
};

export default RegisterStep3;
