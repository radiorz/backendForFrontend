const requestSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
  },
};
// graphql 的做法就是将response schema 交给后端处理
const responseSchema = {
  type: "object",
  properties: {
    data: {
      type: "string",
      default: "hello world",
    },
  },
};

const route = {
  method: "post",
  url: `/hello`,
};

module.exports = {
  name: "helloByName",
  // 定义
  requestSchema,
  responseSchema,
  route,
};
