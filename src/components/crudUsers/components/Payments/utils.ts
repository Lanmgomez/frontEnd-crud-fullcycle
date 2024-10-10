export const uf_list = [
  { id: 1, name: "AC" },
  { id: 2, name: "AL" },
  { id: 3, name: "AP" },
  { id: 4, name: "AM" },
  { id: 5, name: "BA" },
  { id: 6, name: "CE" },
  { id: 7, name: "DF" },
  { id: 8, name: "ES" },
  { id: 9, name: "GO" },
  { id: 10, name: "MA" },
  { id: 11, name: "MT" },
  { id: 12, name: "MS" },
  { id: 13, name: "MG" },
  { id: 14, name: "PA" },
  { id: 15, name: "PB" },
  { id: 16, name: "PR" },
  { id: 17, name: "PE" },
  { id: 18, name: "PI" },
  { id: 19, name: "RJ" },
  { id: 20, name: "RN" },
  { id: 21, name: "RS" },
  { id: 22, name: "RO" },
  { id: 23, name: "RR" },
  { id: 24, name: "SC" },
  { id: 25, name: "SP" },
  { id: 26, name: "SE" },
  { id: 27, name: "TO" },
];

export const payment_method_list = [
  { id: 1, value: "1x R$ 100,00" },
  { id: 2, value: "2x R$ 50,00" },
  { id: 3, value: "3x R$ 33,33" },
  { id: 4, value: "4x R$ 25,00" },
  { id: 5, value: "5x R$ 20,00" },
  { id: 6, value: "6x R$ 16,66" },
  { id: 7, value: "7x R$ 13,33" },
  { id: 8, value: "8x R$ 12,50" },
  { id: 9, value: "9x R$ 11,11" },
  { id: 10, value: "10x R$ 10,00" },
  { id: 11, value: "11x R$ 9,09" },
  { id: 12, value: "12x R$ 8,33" },
];

export type PROPS_FORM = {
  fullName: string;
  email: string;
  cpfOrCnpj: string;
  phone: string;
  cep: string;
  address: string;
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

export const initialValues: PROPS_FORM = {
  fullName: "",
  email: "",
  cpfOrCnpj: "",
  phone: "",
  cep: "",
  address: "",
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

export const dataSource = [
  {
    key: "1",
    description: "Diversos",
    amount: "1",
    unitValue: "R$ 100,00",
    age: 32,
    address: "10 Downing Street",
  },
];

export const columns = [
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
