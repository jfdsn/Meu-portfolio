import { ProjectPage } from '@/components/projectPage';

/*
  Renderiza o componente ProjectPage.
*/
const SingleProject = ({ project }) => {
    return (
      <ProjectPage project={project} />
    )
};

export default SingleProject;

/*
  Função responsável por criar os paths de cada página de projeto. A const paths leva em conta apenas
  os ids existentes no arquivo data.json, qualquer outro id resultará em uma página inexistente.
*/
export async function getStaticPaths() {
    const data = await import('../../data/data.json');
    const projects = data.projects;

    const paths = projects.map(p => ({
      params: { id: p.id }
    }));

    return {
      paths,
      fallback: false,
    }
}

//Filtra e retorna os dados do projeto que tenha o mesmo id que params.id
export async function getStaticProps({ params }) {
    const data = await import('../../data/data.json');
    const project = data.projects.find(p => p.id === params.id);

    return {
      props: { project },
    }
}