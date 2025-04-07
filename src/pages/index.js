import { HomePage } from '@/components/HomePage'


//Renderiza o componente HomePage
export default function Home({ perfil }) {
  return (
    <>
      <HomePage perfil={perfil} />
    </>
  )
}

//Filtra e retorna os dados de perfil do arquivo data.json
export async function getStaticProps() {
    const data = await import('../data/data.json');
    const perfil = data.perfil;
    
    return {
      props: { perfil }
    }
}
