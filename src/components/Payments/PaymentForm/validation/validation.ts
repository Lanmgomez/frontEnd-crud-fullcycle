import * as Yup from "yup";

export const PAYMENT_DATA_VALIDATION = Yup.object().shape({
  fullName: Yup.string(),
  email: Yup.string().email("O e-mail deve ser válido"),
  cpfOrCnpj: Yup.string(),
  phone: Yup.string(),
  cep: Yup.string(),
  street: Yup.string(),
  addressNumber: Yup.string(),
  complement: Yup.string(),
  neighborhood: Yup.string(),
  city: Yup.string(),
  uf: Yup.string(),
  creditCardNumber: Yup.string(),
  creditCardName: Yup.string(),
  expirationCard: Yup.string(),
  cvv: Yup.string(),
  paymentFormInstallment: Yup.string(),
});
