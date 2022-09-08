// import Joi from "joi-browser";
import * as Yup from "yup";

const ValidateUserCreationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-z ]+$/i, "El nombre solo debe contener letras")
    .min(2, "El nombre debe tener como mínimo 2 carácteres")
    .max(30, "El nombre debe tener como máximo 30 carácteres")
    .required("El nombre es requerido"),
  paternalSurname: Yup.string()
    .matches(/^[a-z ]+$/i, "El apellido paterno solo debe contener letras")
    .min(2, "El apellido paterno debe tener como mínimo 2 carácteres")
    .max(30, "El apellido paterno debe tener como máximo 30 carácteres")
    .required("El apellido paterno es requerido"),
  maternalSurname: Yup.string()
    .matches(/^[a-z ]+$/i, "El apellido materno solo debe contener letras")
    .min(2, "El apellido materno debe tener como mínimo 2 carácteres")
    .max(30, "El apellido materno debe tener como máximo 30 carácteres")
    .required("El apellido materno es requerido"),
  username: Yup.string()
    .matches(
      /^[a-z\d]+$/i,
      "El nombre de usuario solo debe contener letras y números"
    )
    .min(6, "El nombre de usuario debe tener como mínimo 6 carácteres")
    .max(20, "El nombre de usuario debe tener como máximo 20 carácteres")
    .required("El nombre de usuario es requerido"),
  email: Yup.string()
    .email("El email no tiene el formato correcto")
    .required("El email es requerido"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/,
      "La contraseña debe tener como mínimo 1 letra minúscula, mayúscula, número y un carácter @$!%*?& y debe tener entre 10 y 20 carácteres"
    )
    .required("La contraseña es requerida"),
  cPassword: Yup.string()
    .required("La confirmación de la contraseña es requerida")
    .oneOf(
      [Yup.ref("password")],
      "La confirmación de la contraseña no coincide con la contraseña"
    ),
});

// const ValidateUserCreationSchema = Joi.object().keys({
//   name: Joi.string().min(2).max(30).required(),
//   paternalSurname: Joi.string().min(2).max(30).required(),
//   maternalSurname: Joi.string().min(2).max(30).required(),
//   username: Joi.string()
//     .regex(/[a-z\d]+/)
//     .required()
//     .min(6)
//     .max(20)
//     .required(),
//   email: Joi.string().email().required(),
//   password: Joi.string()
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/
//     )
//     .required(),
//   cPassword: Joi.string().required().valid(Joi.ref("password")),
// });

const LoginUserSchema = Yup.object().shape({
  email: Yup.string()
    .email("El email no tiene el formato correcto")
    .required("El email es requerido"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/,
      "La contraseña debe tener como mínimo 1 letra minúscula, mayúscula, número y un carácter @$!%*?& y debe tener entre 10 y 20 carácteres"
    )
    .required("La contraseña es requerida"),
});
// const LoginUserSchema = Joi.object().keys({
//   email: Joi.string().email().required(),
//   password: Joi.string()
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/
//     )
//     .required(),
// });

export { ValidateUserCreationSchema, LoginUserSchema };
