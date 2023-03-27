import Link from 'next/link';

const ProjectsPage = ({ projects }) => {
    return (
        <>
            <h1> Projetos</h1>
            {projects.map(p => {
                return (
                    <section>
                        <Link key={p.id} href={`/projects/${p.id}`}>
                            <h3>{p.name}</h3>
                        </Link>
                        <p>{p.short_description}</p>
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