import Image from "next/image"

/*
    Renderiza o conteúdo da página de cada projeto. Recebe como parâmetro o conteúdo específico de
    cada projeto. 
*/

export const ProjectPage = ({ project }) => {
    const tecnologies = project.tecnologies.split(',').map(tech => tech.trim()); //Transforma a string 'tecnologies' em array e remove espaços
    const links = Object.entries(project.links); //Transforma o object 'links' em array
    const imgs = project.images.split(',');

    return (
        <div className="project-container">
            <div className="title-box">
                <h2>{project.name}</h2>
                <div className="project-links">
                    {links.map(l => (
                        <a key={l[0]} target="_blank" href={l[1]} className="project-link">
                            <i className='bx bx-link'></i> {l[0]}
                        </a>
                    ))}
                </div>
            </div>
            
            <section className="project-section">
                <h4>Descrição</h4>
                <p>{project.full_description}</p>
            </section>
            
            <section className="project-section">
                <h4>Funcionalidades</h4>
                <p>{project.functionality}</p>
            </section>
            
            <section className="project-section">
                <h4>Tecnologias</h4>
                <div className="tech-container">
                    {tecnologies.map(tech => (
                        <div key={tech} className="tech-item">
                            {tech}
                        </div>
                    ))}
                </div>
            </section>
            
            {imgs.some(img => img) && (
                <section className="project-section">
                    <h4>Screenshots</h4>
                    <div className="img-box">
                        {imgs.map(img => (
                            img ? <Image 
                                className="project-img" 
                                alt="project image" 
                                key={img} 
                                src={img} 
                                width={400}
                                height={400}
                            /> : <></>  
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}