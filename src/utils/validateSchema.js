import Joi from "joi-browser";

const validateSchema = (values, schema) => {
  const valid = Joi.validate(values, schema, {
    abortEarly: false,
  });
  const newErrorObject = {};
  if (valid.error) {
    valid.error.details.forEach((err) => {
      newErrorObject[err.path.join(".")] = err.message;
    });
    // console.log(valid.error);
  }
  return newErrorObject;
};

export { validateSchema };
