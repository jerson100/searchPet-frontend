import Joi from "joi-browser";

const ValidateUserCreationSchema = Joi.object().keys({
  name: Joi.string().min(2).max(30).required(),
  paternalSurname: Joi.string().min(2).max(30).required(),
  maternalSurname: Joi.string().min(2).max(30).required(),
  username: Joi.string()
    .regex(/[a-z\d]+/)
    .required()
    .min(6)
    .max(20)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/
    )
    .required(),
  cPassword: Joi.string().required().valid(Joi.ref("password")),
});

const LoginUserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/
    )
    .required(),
});

export { ValidateUserCreationSchema, LoginUserSchema };
