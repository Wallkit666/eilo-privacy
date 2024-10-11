import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://strapi.a-bots.com" + "/graphql",
  cache: new InMemoryCache(),

});

export default client;
