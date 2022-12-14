import * as Yup from "yup";

const ValidatePetCreationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-z ]+$/i, "El nombre de contener solo letras")
    .min(2, "El nombre como mínimo debe contener 2 letras")
    .max(40, "El nombre como máximo debe contener 40 letras")
    .required("El nombre es requerido"),
  breed: Yup.string().required("La raza es requerido"),
  size: Yup.string().required("El tamaño es requerido"),
  eyeColor: Yup.string()
    .matches(/^[a-z ]+$/i, "El color de ojos de contener solo letras")
    .min(2, "El color de ojos como mínimo debe contener 2 letras")
    .max(40, "El color de ojos como máximo debe contener 40 letras"),
  hairColor: Yup.string()
    .matches(/^[a-z ]+$/i, "El color del pelo de contener solo letras")
    .min(2, "El color del pelo como mínimo debe contener 2 letras")
    .max(40, "El color del pelo como máximo debe contener 40 letras"),
  description: Yup.string().max(
    400,
    "La descripción como máximo debe contener 400 carácteres"
  ),
});

const ValidatePetCreationRequestSchema = Yup.object().shape({
  pets: Yup.array()
    .of(Yup.string("Seleccione una mascota como mínimo"))
    .min(1, "Seleccione una mascota como mínimo"),
  description: Yup.string().max(
    500,
    "La descripción como máximo debe tener 500 letras"
  ),
  location: Yup.array()
    .of(Yup.number("Solo se adminiten un arreglo de números"))
    .min(2)
    .max(2)
    .nullable(true),
});

export { ValidatePetCreationSchema, ValidatePetCreationRequestSchema };
