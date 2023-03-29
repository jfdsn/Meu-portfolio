export const HomePage = ({ perfil }) => {
    return (
        <div className="about-content">
            <h1>Oi, sou <span>{perfil.name}</span></h1>
            <h3>{perfil.abilities}</h3>
            <p>{perfil.about}</p>
            <div className="social-links">
                <a href={perfil.links.github} target="_blank"><i className='bx bxl-github'></i></a>
                <a href={perfil.links.linkedin} target="_blank"><i className='bx bxl-linkedin-square'></i></a>
            </div>
            <div className="email"><i class='bx bxs-envelope' ></i><p>{perfil.email}</p></div>
        </div>
    )
}