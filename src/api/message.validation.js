import * as Yup from "yup";

const ValidateMessageImageCreationSchema = Yup.object().shape({
  message: Yup.string()
    .required("El mensaje es requerido")
    .trim()
    .min(1, "El mensaje debe tener como mínimo 1 carácter")
    .max(150, "El mensaje debe tener como máximo 200 carácter"),
});

export { ValidateMessageImageCreationSchema };
