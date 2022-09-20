import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../modules/layout/MainLayout";
import injectGlobals from "../modules/jss/global_styles";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout>
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
}

export default injectGlobals(MyApp);
