import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl51qcxll1tli01ujdhadg66j/master',
  // headers: {
  //   'Authorization': `Bearer  `
  // },
  cache: new InMemoryCache()
})