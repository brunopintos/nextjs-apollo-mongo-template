import "../utils/styles.css";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { primary, secondary } from '../utils/colors';
import Head from 'next/head';
import { withApollo } from '../apollo/client';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default withApollo(MyApp);
