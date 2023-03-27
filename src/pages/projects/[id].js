import { ProjectPage } from '@/components/projectPage';

const SingleProject = ({ project }) => {
    return (
      <ProjectPage project={project} />
    )
};

export default SingleProject;

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

export async function getStaticProps({ params }) {
    const data = await import('../../data/data.json');
    const project = data.projects.find(p => p.id === params.id);

    return {
      props: { project },
    }
}