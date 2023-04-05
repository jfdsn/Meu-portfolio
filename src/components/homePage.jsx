import Image from "next/image"

export const HomePage = ({ perfil }) => {
    const abilities = perfil.abilities.split(',')

    return (
        <div className="home-container">
            <div className="info-content">
                <Image alt='perfil image' width={220} height={220} src='/placeholder.jpg' />
                <h1>Oi, sou <span>{perfil.name}</span></h1>
                <h3>{perfil.job}</h3>
                <div className="social-links">
                    <a href={perfil.links.github} target="_blank">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href={perfil.links.linkedin} target="_blank">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                </div>
                <div className="email">
                    <a href="mailto:jonathanfdsn@gmail.com">
                        <i className='bx bxs-envelope'>{perfil.email}</i>
                    </a>
                </div>
            </div>
            <div className="about-content">
                <p>{perfil.about}</p>
                <h4>Experiência com:</h4>
                <ul>
                    {abilities.map(a => (
                        <li key={a}>{a}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}