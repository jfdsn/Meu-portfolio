import '@/styles/globals.css'
import '@/styles/style.sass'
import { MainLayout } from '@/components/mainLayout'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <main>
        <Component {...pageProps} />
      </main>
    </MainLayout>
  )
}
