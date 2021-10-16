import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled } from "apollo-server-core"
import { config } from "@keystone-next/keystone"
import { lists } from "./schema"
import { withAuth, session } from "./auth"

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    graphql: {
      apolloConfig: {
        plugins: [process.env.NODE_ENV === "production" ? ApolloServerPluginLandingPageDisabled() : ApolloServerPluginLandingPageGraphQLPlayground()],
      },
    },
    lists,
    session,
  })
)
