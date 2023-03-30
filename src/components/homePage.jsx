import Image from "next/image"

export const HomePage = ({ perfil }) => {
    return (
        <div className="home-container">
            <div className="info-content">
                <Image alt='perfil image' width={220} height={220} src='/placeholder.jpg' />
                <h1>Oi, sou <span>{perfil.name}</span></h1>
                <h3>{perfil.abilities}</h3>
                <div className="social-links">
                    <a href={perfil.links.github} target="_blank"><i className='bx bxl-github'></i></a>
                    <a href={perfil.links.linkedin} target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                </div>
                <a href="mailto:jonathanfdsn@gmail.com" className="email">
                    <i className='bx bxs-envelope' >{perfil.email}</i>
                </a>
            </div>
            <div className="about-content">
                <p>{perfil.about}</p>
            </div>
        </div>
    )
}