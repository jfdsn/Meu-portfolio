export const ProjectPage = ({ project }) => {
    const tecnologies = project.tecnologies.split(',');
    const links = Object.entries(project.links);

    return (
        <div className="project-container">
            <div className="title-box">
                <h2>{project.name}</h2>
                <div>
                    {links.map(l => (
                        <a key={l[0]} href={l[1]}><i className='bx bx-link'>{l[0]}</i></a>
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
        </div>
    )
}