import { ApolloClient, ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "@apollo/client/link/context";

let globalApolloClient = null;

export function withApollo(PageComponent, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const { AppTree } = ctx;

      const apolloClient = (ctx.apolloClient = initApolloClient());

      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (typeof window === "undefined") {
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        if (ssr) {
          try {
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />
            );
          } catch (error) {
            console.error("Error while running `getDataFromTree`", error);
          }

          Head.rewind();
        }
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState,
      };
    };
  }

  return WithApollo;
}

function initApolloClient(initialState) {
  if (typeof window === "undefined") {
    return createApolloClient(initialState);
  }

  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState);
  }

  return globalApolloClient;
}

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const defaultOptions = {
  query: {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  },
  watchQuery: {
    errorPolicy: "ignore",
    fetchPolicy: "no-cache",
  },
};

function createApolloClient(initialState = {}) {
  const ssrMode = typeof window === "undefined";
  const cache = new InMemoryCache().restore(initialState);

  return new ApolloClient({
    cache,
    defaultOptions: defaultOptions,
    link: authLink.concat(createIsomorphLink()),
    ssrMode,
  });
}

function createIsomorphLink() {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("apollo-link-schema");
    const { schema } = require("./schema");
    return new SchemaLink({ schema });
  } else {
    const { HttpLink } = require("apollo-link-http");
    return new HttpLink({
      credentials: "same-origin",
      uri: "/api/graphql",
    });
  }
}
