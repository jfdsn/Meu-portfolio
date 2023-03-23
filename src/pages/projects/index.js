const ProjectsPage = ({ projects }) => {
    return (
        <>
            <h1> Projetos</h1>
            {projects.map(e => {
                return <a href={`/projects/${e.id}`}>{ e.name }</a>
            })}
        </>
    )
}

export default ProjectsPage;

export async function getStaticProps() {
    const data = await import('../../data/data.json');
    const projects = data.projects;
    
    return {
      props: { projects }
    }
}