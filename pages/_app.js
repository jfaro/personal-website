import NProgress from 'nprogress'
import { Router } from 'next/router'
import '../styles/globals.css'
import '../styles/nprogress.css';

// Progress bar
NProgress.configure({ showSpinner: false });
Router.events.on()
Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeError", NProgress.done);
Router.events.on("routeChangeComplete", NProgress.done);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
