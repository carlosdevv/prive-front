import type { AppProps } from "next/app";

import GlobalStyle from "@/styles/globals";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { inter } from "./fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={inter.className}>
          <Component {...pageProps} />
          <GlobalStyle />
        </main>
      </ThemeProvider>
    </>
  );
}
