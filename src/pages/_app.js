import '@/styles/globals.css'


// pages/_app.js
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
