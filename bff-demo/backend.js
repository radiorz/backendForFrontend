const express = require("express");
const requestCheck = require("./requestCheck");
const { requestSchema, responseSchema, route } = require("./route");
const responseBuilder = require("./responseBuilder");
function startServer() {
  const app = new express();
  app.use(express.json()); //Used to parse JSON bodies
  console.log(`route,schema`, route, requestSchema);
  app[route.method](route.url, function (req, res) {
    // TODO 模仿graphql 搞个可以输入responseSchema 的方式，就可以对返回值进行过滤了
    const { body: data } = req;
    const { isValid, errors } = requestCheck(requestSchema, data);
    let result = {};
    if (!isValid) {
      // 错误信息
      result = { isValid, errors };
    } else {
      // 通过responseSchema 进行处理
      result = { data: `hello ${data.name}` };
      result = responseBuilder(responseSchema, result);
    }
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  });
  app.listen(4000, () => {
    console.log(`server is start`);
  });
}

startServer();
