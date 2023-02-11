import '@/styles/globals.css'
import { Layout } from '@/components/Layout/layout'

export default function App({ Component, pageProps }) {
      <Layout>
        <Component {...pageProps} />
      </Layout>
}
