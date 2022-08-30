import '../styles/globals.css'
import Layout from '../components/Layout'
import {ReducerWrapper} from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return(
    <ReducerWrapper >
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ReducerWrapper>
    ) 
}

export default MyApp
