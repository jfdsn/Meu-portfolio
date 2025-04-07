import { AllProjectsPage } from '@/components/AllProjectsPage';

//Renderiza o componente AllProjectsPage
const Projects = ({ projects }) => {
    return (
        <AllProjectsPage projects={projects} />
    )
}

export default Projects;

//Filtra e retorna os dados sobre os projetos do arquivo data.json
export async function getStaticProps() {
    const data = await import('../../data/data.json');
    const projects = data.projects;
    
    return {
      props: { projects }
    }
}