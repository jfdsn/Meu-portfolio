import Link from 'next/link';

const ProjectsPage = ({ projects }) => {
    return (
        <>
            <h1> Projetos</h1>
            {projects.map(e => {
                return (
                    <section>
                        <Link key={e.id} href={`/projects/${e.id}`}>
                            <h3>{ e.name }</h3>
                        </Link>
                        <p>{e.short_description}</p>
                    </section>
                )
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