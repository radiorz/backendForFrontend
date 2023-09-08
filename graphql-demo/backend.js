const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// 用于存储用户的数据
const users = [];

// 定义GraphQL Schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
  }
`);

// 定义GraphQL Resolver
const root = {
  users: () => users,
  user: (args) => users.find((user) => user.id === args.id),
  addUser: (args) => {
    const user = {
      id: String(users.length + 1),
      name: args.name,
      email: args.email,
    };
    users.push(user);
    return user;
  },
  updateUser: (args) => {
    const user = users.find((user) => user.id === args.id);
    if (!user) {
      throw new Error("用户不存在");
    }
    if (args.name) {
      user.name = args.name;
    }
    if (args.email) {
      user.email = args.email;
    }
    return user;
  },
  deleteUser: (args) => {
    const index = users.findIndex((user) => user.id === args.id);
    if (index === -1) {
      throw new Error("用户不存在");
    }
    const deletedUsers = users.splice(index, 1);
    return deletedUsers[0];
  },
};

// 创建Express应用
const app = express();

// 将GraphQL路由挂载到'/graphql'路径
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true,
  })
);

// 启动服务器
app.listen(4000, () => {
  console.log("服务器已启动，监听端口 4000");
});
