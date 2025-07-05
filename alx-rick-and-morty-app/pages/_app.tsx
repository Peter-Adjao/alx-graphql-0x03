import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";
import ErrorBoundary from "@/components/ErrorBoundary";
import '../sentry.client.config'; // 👈 Import your Sentry config


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </ErrorBoundary>
  )
}