import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "../components/layout/Header";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="dark:bg-gray-700">
        <Head></Head>
        <Header />
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
