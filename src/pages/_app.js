import { ThemeProvider } from "next-themes";

import GA from "@/components/ga";

import "@/utils/base.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      <GA />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
