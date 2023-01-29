import PageWrapper from "@/components/PageWrapper";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.asPath.startsWith("/admin")) return <Component {...pageProps} />;
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}
