import { Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { validationSchema } from "./validations";
import {
  handleErrorNotification,
  handleSuccessNotification,
} from "../../utils";
import { UpdateUsersData, usersUrl } from "../hooks/CrudUsersData";
import FormUser from "./Form/FormUser";
import Container from "../../Container/Container";

export type PROPS_FORM = {
  name: string;
  lastname: string;
  email: string;
  birthday: string;
  phone: string;
  address: string;
};

const initialValues: PROPS_FORM = {
  name: "",
  lastname: "",
  email: "",
  birthday: "",
  phone: "",
  address: "",
};

function EditCard() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const handleSubmit = async (values: PROPS_FORM) => {
    if (!values) {
      return;
    }

    try {
      await UpdateUsersData(`${usersUrl}/${id}`, values);

      handleSuccessNotification(
        "Usuário editado com sucesso",
        "Suas alterações foram salvas"
      );

      navigate("/home");
    } catch (error) {
      handleErrorNotification(
        "Erro ao editar o usuário",
        "Tente novamente mais tarde"
      );
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="edit-card">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          <FormUser />
        </Formik>
      </div>
    </Container>
  );
}

export default EditCard;
