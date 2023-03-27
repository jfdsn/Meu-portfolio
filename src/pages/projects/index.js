import { AllProjectsPage } from '@/components/allProjectsPage';

const Projects = ({ projects }) => {
    return (
        <AllProjectsPage projects={projects} />
    )
}

export default Projects;

export async function getStaticProps() {
    const data = await import('../../data/data.json');
    const projects = data.projects;
    
    return {
      props: { projects }
    }
}