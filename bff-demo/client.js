const apiService = require("./genClient");

(async () => {
  const result = await apiService.helloByName({ name: "王" });
  console.log(`result`, result);
})();
