const apiService = require("./genClient");

(async () => {
  const a = await apiService.helloByName({ name: "王" });
  console.log(`a`, a);
})();
