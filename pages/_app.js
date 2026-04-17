import "@/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#f97316" />
      </Head>
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="n4yPRZ3tRl9yvvTQ5A903g"
        strategy="afterInteractive"
      />
      <Header />
      <main className="pt-16 md:pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

