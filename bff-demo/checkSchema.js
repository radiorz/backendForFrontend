const Ajv = require("ajv");
const ajv = new Ajv();

function checkSchema(schema, data) {
  const validate = ajv.compile(schema);
  validate(data);
}
module.exports = checkSchema;
