/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useFormikContext, Form } from "formik";
import { Button, DatePicker, Form as FormAntd, Input } from "antd";
import { useParams } from "react-router-dom";
import { GetUsersData, usersUrl } from "../../hooks/CrudUsersData";
import { PROPS_FORM } from "../EditCard";
import Modals from "../../Modals/Modals";
import ErrorMessage from "../../../ErrorMessages/ErrorMessage";
import moment from "moment";

import "../EditCard.scss";
import "../../Modals/Modals.scss";

const FormUser = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { submitForm, setFieldValue, setValues, errors, touched, values } =
    useFormikContext<PROPS_FORM>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUsersData(`${usersUrl}/${id}`);

      if (data) {
        setValues({ ...data });
        return;
      }
    };

    fetchData();
  }, [id]);

  const modalTitle = (title: string) => {
    return (
      <div className="modal-title">
        <i className="bi bi-exclamation-circle-fill" />
        <p className="p-modal-title">{title}</p>
      </div>
    );
  };

  return (
    <Form className="form">
      <h2 className="form-title">Edite as informações Pessoais</h2>

      <span className="form-span">Nome:</span>
      <FormAntd.Item>
        <Input
          name="name"
          className="input-form"
          placeholder="Digite seu nome..."
          type="text"
          onChange={(e) => setFieldValue("name", e.target.value)}
          value={values.name}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.name} touched={touched.name} />

      <span className="form-span">Sobrenome:</span>
      <FormAntd.Item>
        <Input
          name="lastname"
          className="input-form"
          placeholder="Digite seu sobrenome..."
          type="text"
          onChange={(e) => setFieldValue("lastname", e.target.value)}
          value={values.lastname}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.lastname} touched={touched.lastname} />

      <span className="form-span">Email:</span>
      <FormAntd.Item>
        <Input
          name="email"
          className="input-form"
          placeholder="Digite seu e-mail..."
          type="text"
          onChange={(e) => setFieldValue("email", e.target.value)}
          value={values.email}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.email} touched={touched.email} />

      <span className="form-span">Data de nascimento:</span>
      <FormAntd.Item>
        <DatePicker
          name="birthday"
          format="DD/MM/YYYY"
          className="input-form"
          placeholder="Selecione sua data de nascimento..."
          value={values.birthday ? moment(values.birthday) : null}
          disabled
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.birthday} touched={touched.birthday} />

      <span className="form-span">Telefone:</span>
      <FormAntd.Item>
        <Input
          name="phone"
          className="input-form"
          placeholder="Digite seu telefone..."
          type="text"
          onChange={(e) => setFieldValue("phone", e.target.value)}
          value={values.phone}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.phone} touched={touched.phone} />

      <span className="form-span">Endereço:</span>
      <FormAntd.Item>
        <Input
          name="address"
          className="input-form"
          placeholder="Digite seu endereço..."
          type="text"
          onChange={(e) => setFieldValue("address", e.target.value)}
          value={values.address}
        />
      </FormAntd.Item>
      <ErrorMessage error={errors.address} touched={touched.address} />

      <div className="form-buttons">
        <Button onClick={() => setIsModalOpen(true)}>Cancelar</Button>

        <Modals
          title={modalTitle("Você não salvou as alterações")}
          content={"Tem certeza que deseja sair sem salvar?"}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <Button type="primary" onClick={submitForm}>
          Salvar
        </Button>
      </div>
    </Form>
  );
};

export default FormUser;
