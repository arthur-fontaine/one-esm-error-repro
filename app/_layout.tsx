import { Slot } from 'one'
import { SafeAreaView } from "react-native";
import { createConnectTransport } from "@connectrpc/connect-web";
import { TransportProvider } from "@connectrpc/connect-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const finalTransport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

const queryClient = new QueryClient();

export default function Layout() {
  return <>
    {typeof document !== 'undefined' && (
      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.svg" />
      </>
    )}

    <SafeAreaView style={{ flex: 1 }}>
      <TransportProvider transport={finalTransport}>
        <QueryClientProvider client={queryClient}>
          <Slot />
        </QueryClientProvider>
      </TransportProvider>
    </SafeAreaView>
  </>
}
