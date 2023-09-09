const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
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
  schema,
  route,
};
