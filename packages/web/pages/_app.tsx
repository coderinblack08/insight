import "tailwindcss/tailwind.css";
import { IdProvider } from "@radix-ui/react-id";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default MyApp;
