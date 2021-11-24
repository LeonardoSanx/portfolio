import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/nav";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  const [isProduct, setIsProduct] = useState(false);
  useEffect(() => {
    router.route == "/projects/[id]" ? setIsProduct(true) : setIsProduct(false);
  }, [router.route]);
  return (
    <AnimatePresence>
      <Navbar page={router.route} isProduct={isProduct} />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
