const express = require("express");
const bodyParser = require("body-parser");
const checkSchema = require("./checkSchema");
const { schema, route } = require("./route");
function startServer() {
  const app = new express();
  app.use(express.json()); //Used to parse JSON bodies
  console.log(`route,schema`, route, schema);
  app[route.method](route.url, function (req, res) {
    console.log(`req`, req.body);
    const { body: data } = req;
    checkSchema(schema, data);
    res.send(`hello ${data.name}`);
  });
  app.listen(4000, () => {
    console.log(`isstart`);
  });
}

startServer();
