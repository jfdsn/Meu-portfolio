import '@/styles/globals.css'
import { MainLayout } from '@/components/mainlayout'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
