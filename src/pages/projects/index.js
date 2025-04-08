import { ProjectListPage } from '@/components/ProjectListPage';

//Renderiza o componente AllProjectsPage
const Projects = ({ projects }) => {
    return (
        <ProjectListPage projects={projects} />
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