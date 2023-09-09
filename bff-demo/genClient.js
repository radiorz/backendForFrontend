const axios = require("axios");
const { name, schema, route } = require("./route");
const checkSchema = require("./checkSchema");
function genClient() {
  return {
    async [name](data) {
      checkSchema(schema, data);
      const response = await axios[route.method](
        "http://localhost:4000" + route.url,
        {
          ...data,
        }
      );
      return response.data;
    },
  };
}

module.exports = genClient();
