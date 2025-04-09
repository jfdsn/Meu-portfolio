import Image from "next/image"
import Link from "next/link"
import { ImageCarousel } from "./ImageCarousel";

/*
    Renderiza o conteúdo da página de cada projeto. Recebe como parâmetro o conteúdo específico de
    cada projeto. 
*/

export const ProjectPage = ({ project }) => {
    const links = Object.entries(project.links);
    const imgs = Object.entries(project.images);

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
                <h4>Desafios</h4>
                <p>{project.challenges}</p>
            </section>
            
            <section className="project-section">
                <h4>Tecnologias</h4>
                <div className="tech-container">
                    {project.technologies.map(tech => (
                        <div key={tech} className="tech-item">
                            {tech}
                        </div>
                    ))}
                </div>
            </section>
            
            {imgs.some(img => img) && (
                <section className="project-section">
                    <h4>Screenshots</h4>
                    <ImageCarousel images={project.images}/>
                </section>
            )}
                        
            <div className="back-button-container">
                <Link href="/projects" className="back-button">
                    <i className='bx bx-arrow-back'></i> Voltar
                </Link>
            </div>
        </div>
    )
}