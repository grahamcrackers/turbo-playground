import { AppProps } from 'next/app';
import '../../styles/globals.css';

const DocsApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default DocsApp;
