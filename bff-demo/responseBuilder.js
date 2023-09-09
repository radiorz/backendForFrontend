const { build } = require("fast-json-stringify");

// 一个是默认值 一个是过滤 试了一下fast-json-stringify都满足爽歪歪
module.exports = function responseBuilder(schema, data) {
  const stringify = build(schema);
  const result = stringify(data);
  console.log(`data,result`, data, result);
  return result;
};
