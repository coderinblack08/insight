import { IdProvider } from "@radix-ui/react-id";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
