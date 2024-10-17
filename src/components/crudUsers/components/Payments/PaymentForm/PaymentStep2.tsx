/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Form as FormAntd, Input, Select } from "antd";
import { PROPS_FORM } from "../Payments";
import { useFormikContext } from "formik";
import { GetData, uf_list_url, via_cep_url } from "../hooks/PaymentData";

import "../Payments.scss";

const { Option } = Select;

type PROP_STATES_LIST = {
  id: number;
  state: string;
  uf: string;
};

const PaymentStep2 = () => {
  const { values, setFieldValue, setValues } = useFormikContext<PROPS_FORM>();

  const [ufStates, setUfStates] = useState<PROP_STATES_LIST[]>();

  const addressAutoComplete = async (value: string) => {
    const data = await GetData(`${via_cep_url}/${value}/json/`);

    setValues((prevValues) => ({
      ...prevValues,
      address: data.logradouro,
      complement: data.complemento,
      neighborhood: data.bairro,
      city: data.localidade,
      uf: data.uf,
      cep: data.cep,
    }));
  };

  const getUfList = async () => {
    try {
      const ufData = await GetData(uf_list_url);

      setUfStates(ufData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUfList();
  }, []);

  useEffect(() => {
    if (values.cep.length === 8) {
      addressAutoComplete(values.cep);
    }
  }, [values.cep]);

  return (
    <>
      <div className="cep-input">
        <span>
          CEP: <span className="asterisk">*</span>
        </span>
        <FormAntd.Item>
          <Input
            name="cep"
            className="input-form"
            placeholder="Digite seu nome..."
            type="text"
            maxLength={9}
            onChange={(e) => setFieldValue("cep", e.target.value)}
            value={values.cep}
          />
        </FormAntd.Item>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            Rua: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="address"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              onChange={(e) => setFieldValue("address", e.target.value)}
              value={values.address}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            Número: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="addressNumber"
              className="input-form"
              placeholder="Digite seu email..."
              type="text"
              onChange={(e) => setFieldValue("addressNumber", e.target.value)}
              value={values.addressNumber}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>Complemento:</span>
          <FormAntd.Item>
            <Input
              name="complement"
              className="input-form"
              placeholder="Digite seu CPF ou CNPJ..."
              type="text"
              onChange={(e) => setFieldValue("complement", e.target.value)}
              value={values.complement}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            Bairro: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="neighborhood"
              className="input-form"
              placeholder="Digite seu número de contato..."
              type="text"
              onChange={(e) => setFieldValue("neighborhood", e.target.value)}
              value={values.neighborhood}
            />
          </FormAntd.Item>
        </div>
      </div>

      <div className="form-inputs-father">
        <div className="form-input-child">
          <span>
            Cidade: <span className="asterisk">*</span>
          </span>
          <FormAntd.Item>
            <Input
              name="city"
              className="input-form"
              placeholder="Digite seu nome..."
              type="text"
              onChange={(e) => setFieldValue("city", e.target.value)}
              value={values.city}
            />
          </FormAntd.Item>
        </div>

        <div className="form-input-child">
          <span>
            UF: <span className="asterisk">*</span>
          </span>
          <Select
            placeholder="Selecione uma UF..."
            onChange={(value) => setFieldValue("uf", value)}
            value={values.uf}
          >
            <Option value="" disabled>
              Selecione uma UF
            </Option>

            {ufStates?.map((uf: PROP_STATES_LIST) => (
              <Option key={uf.id} value={uf.uf}>
                {uf.state} - {uf.uf}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default PaymentStep2;
