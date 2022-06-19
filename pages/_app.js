import '../styles/globals.css'
import Layout from '../components/Layout'
import {ReducerWrapper} from '../context/AppContext'


function MyApp({ Component, pageProps }) {
  return(
    <ReducerWrapper >
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ReducerWrapper>
    ) 
}

export default MyApp
