import '@/styles/style.sass'
import { MainLayout } from '@/components/MainLayout'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
  return (
    <MainLayout>
        <Component {...pageProps} />
    </MainLayout>
  )
}
