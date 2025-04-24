import Link from "next/link";

/*
    Renderiza, baseado no data.json, os cards de todos projetos da página Projects. Recebe como parâmetro os dados filtrados. 
*/
export const ProjectListPage = ({ projects }) => {

    const getBackgroundImage = (type) => {
        if (type === 'frontend') {
            return '/background-front.png';
        } else if (type === 'backend') {
            return '/background-back.png';
        } else if (type === 'fullstack') {
            return '/background-fullstack.png'
        } else {
            return '/'; // Default fallback
        }
    };

    const getMainTechnology = (technologies) => {
        if (!technologies) return [];
        
        // Get first 3 technologies
        return technologies.map(tech => tech.trim())
            .filter((_, index) => index < 3);
    };
    
    return (
        <>
            <h2 className="title">Projetos</h2>
            <div className="cards-container">
                {projects.map(p => {
                    const mainTechs = getMainTechnology(p.technologies);
                    let animationDelay = 200;
                    const delaySum = 50;
                    
                    return (
                        <div className="card" data-aos="fade-left" data-aos-delay={animationDelay + delaySum * p.id} key={p.id} style={{
                            backgroundImage: `linear-gradient(rgba(68, 3, 3, 0.65), rgba(29, 24, 24, 0.7), transparent), url(${getBackgroundImage(p.type)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <h3>{p.name}</h3>
                            <Link href={`/projects/${p.id}`}>
                                <div className="card-layer">
                                    <p>{p.short_description}</p>
                                    
                                    {mainTechs.length > 0 && (
                                        <div className="tech-tags">
                                            {mainTechs.map(tech => (
                                                <span key={tech} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}