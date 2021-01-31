import { ApolloServer } from "apollo-server-micro";
import schema from "../../apollo/schema";
const { getUserFromToken } = require("../../apollo/auth");

const apolloServer = new ApolloServer({
  context: ({ req }) => {
    try {
      const token = req.headers.authorization || req.cookies.token || "";

      const user = getUserFromToken(token);
      return { user };
    } catch (err) {
      // User unauthenticated
    }
    return {};
  },
  formatError: (err) =>
    err
    && err.extensions
    && err.extensions.exception
    && err.extensions.exception.name
    && err.extensions.exception.name.includes("MongoError")
      ? new Error("Internal server error")
      : err,
  introspection: true,
  playground: true,
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

async function start(req, res) {
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export default start;
