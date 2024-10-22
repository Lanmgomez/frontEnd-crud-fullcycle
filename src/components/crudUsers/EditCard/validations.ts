import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name : Yup
        .string()
        .required("O nome é obrigatório"),
    lastname : Yup
        .string()
        .required("O sobrenome é obrigatório"),
    email : Yup
        .string()
        .required("O e-mail é obrigatório")
        .email("O e-mail deve ser válido"),
    birthday : Yup
        .string()
        .required("A data de nascimento é obrigatória"),
    phone : Yup
        .string()
        .required("O telefone é obrigatório"),
    address : Yup
        .string()
        .required("O endereço é obrigatório"),
});