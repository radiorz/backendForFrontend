const axios = require("axios");

async function getUsers() {
  const query = `
    query {
      users {
        id
        name
        email
      }
    }
  `;
  return await axios.post("http://localhost:4000/graphql", {
    query,
  });
}
async function postUser() {
  const query = `
  mutation {
  addUser(name: "Alice", email: "alice@example.com") {
    id
    name
    email
  }
}
  `;
  return await axios.post("http://localhost:4000/graphql", {
    query,
  });
}
(async () => {
  await postUser();
  const users = await getUsers();
  console.log(`users`, JSON.stringify(users.data));
})();
