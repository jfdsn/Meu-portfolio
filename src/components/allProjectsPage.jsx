import Link from "next/link";

/*
    Renderiza, baseado no data.json, os cards de todos projetos da página Projects. Recebe como parâmetro
    o dados filtrados. 
*/
export const AllProjectsPage = ({ projects }) => {
    return (
        <>
            <h2 className="title">Projetos</h2>
            <div className="cards-container">
                {projects.map(p => {
                    return (
                        <div className="card" key={p.id}>
                                <h3>{p.name}</h3>
                            <Link href={`/projects/${p.id}`}>
                                <div className="card-layer">
                                    {p.short_description}
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}