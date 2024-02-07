"use strict";

import Fastify from "fastify";
import mercurius from "mercurius";

function getBooks() {
  return [
    { id: 1, title: "title 1", author: "author 1" },
    { id: 2, title: "title 2", author: "author 2" },
    { id: 3, title: "title 3", author: "author 3" },
    { id: 4, title: "title 4", author: "author 4" },
    { id: 5, title: "title 5", author: "author 5" },
  ];
}

const app = Fastify();

const schema = `
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]
  }
`;

const resolvers = {
  Query: {
    books: async () => {
      return getBooks();
    },
  },
};

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true,
});

// app.get("/", async function (req, reply) {
//   return
// });

app.listen({ port: 3000 });
