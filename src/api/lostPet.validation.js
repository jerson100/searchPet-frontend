import * as Yup from "yup";

const CreateLostPetCommentSchema = Yup.object().shape({
  description: Yup.string().required("La descripción es requerida").max(250),
});

export { CreateLostPetCommentSchema };
