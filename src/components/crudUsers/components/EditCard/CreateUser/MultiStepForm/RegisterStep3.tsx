import { PROPS_FORM } from '../../EditCard';

type PROP = {
    values: PROPS_FORM
};

const RegisterStep3 = ({ values }: PROP) => {
  return (
    <div>
        <h3>Confirme seus dados</h3>
        <div style={{ borderBottom: "1px solid gray"}}>
            <p>Nome: <strong>{values.name}</strong></p> 
            <p>Sobrenome: <strong>{values.lastname}</strong></p> 
            <p>Email: <strong>{values.email}</strong></p>
        </div>

        <div>
            <p>Endereço: <strong>{values.address}</strong></p>
            <p>Data de nascimento: <strong>{values.birthday}</strong></p>
            <p>Telefone: <strong>{values.phone}</strong></p>
        </div>
    </div>
  );
};

export default RegisterStep3;