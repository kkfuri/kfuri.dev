import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { ThemeProvider } from "next-themes";

import "@/utils/base.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "UA-173494127-2" });
  }, []);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
