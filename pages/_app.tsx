import PageWrapper from "@/components/PageWrapper";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}
