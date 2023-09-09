const Ajv = require("ajv");
const ajv = new Ajv();

function checkSchema(schema, data) {
  const validate = ajv.compile(schema);
  const isValid = validate(data);
  if (isValid) {
    return { isValid };
  } else {
    return { isValid, errors: validate.errors };
  }
}
module.exports = checkSchema;
