import Cors from "micro-cors";
import { ApolloServer, gql } from "apollo-server-micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {},
  introspection: true,
});
const serverStart = apolloServer.start();

export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await serverStart;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});
