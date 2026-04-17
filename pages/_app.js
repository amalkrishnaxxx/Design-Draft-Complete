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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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

