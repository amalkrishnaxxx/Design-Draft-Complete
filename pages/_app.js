import "@/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
