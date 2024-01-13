import '@/styles/globals.css'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const montserrat = Montserrat ({
  subsets: ['latin'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (

    <>
    <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <link  rel='icon' href='/favicon.ico'/>
    </Head>
    <MantineProvider theme={theme}>
      <main className={`${montserrat.variable} font-mont w-full min-h-screen bg-light`}> 
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      </main>
    </MantineProvider>
    </>
  );
}

export default MyApp;
