import { HomePage } from '@/components/HomePage'


//Renderiza o componente HomePage
export default function Home({ profile }) {
  return (
    <>
      <HomePage profile={profile} />
    </>
  )
}

//Filtra e retorna os dados de perfil do arquivo data.json
export async function getStaticProps() {
    const data = await import('../data/data.json');
    const profile = data.profile;
    
    return {
      props: { profile }
    }
}
