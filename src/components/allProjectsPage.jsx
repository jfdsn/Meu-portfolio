import Link from "next/link";

export const AllProjectsPage = ({ projects }) => {
    return (
        <>
            <h1> Projetos</h1>
            {projects.map(p => {
                return (
                    <section key={p.id}>
                        <Link href={`/projects/${p.id}`}>
                            <h3>{p.name}</h3>
                        </Link>
                        <p>{p.short_description}</p>
                    </section>
                )
            })}
        </>
    )
}