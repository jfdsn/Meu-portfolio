import Head from 'next/head'
import { Inter } from 'next/font/google'
import { HomePage } from '@/components/homepage'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ perfil }) {
  return (
    <>
      <HomePage perfil={perfil} />
    </>
  )
}

export async function getStaticProps() {
    const data = await import('../data/data.json');
    const perfil = data.perfil;
    
    return {
      props: { perfil }
    }
}
