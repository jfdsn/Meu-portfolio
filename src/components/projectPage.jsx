import Image from "next/image"

/*
    Renderiza o conteúdo da página de cada projeto. Recebe como parâmetro o conteúdo específico de
    cada projeto. 
*/

export const ProjectPage = ({ project }) => {
    const tecnologies = project.tecnologies.split(','); //Transforma a string 'tecnologies' em array
    const links = Object.entries(project.links); //Transforma o object 'links' em array
    const imgs = project.images.split(',');

    return (
        <div className="project-container">
            <div className="title-box">
                <h2>{project.name}</h2>
                <div>
                    {links.map(l => (
                        <a key={l[0]} target="_blank" href={l[1]}>
                            <i className='bx bx-link'>{l[0]}</i>
                        </a>
                    ))}
                </div>
            </div>
            <h4>Descrição</h4>
            <p>{project.full_description}</p>
            <h4>Funcionalidades</h4>
            <p>{project.functionality}</p>
            <h4>Tecnologias</h4>
            {tecnologies.map(t => (
                <li key={t}>{t}</li>
            ))}
            <div className="img-box">
                {imgs.map(i => (
                    i ? <img className="project-img" alt="project image" src={i} /> : <></>  
                ))}
            </div>
        </div>
    )
}