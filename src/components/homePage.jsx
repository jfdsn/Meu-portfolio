import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ perfil }) => {
    const abilities = perfil.abilities.split(',')

    return (
        <>
            <section id="about" className="hero-content">
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
                    <div className="download-cv">
                        <a href="/CV-Jonathan.pdf" download>
                            <i className='bx bxs-download'></i>
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="about-content">
                    {perfil.about}
                </div>
            </section>
            <section id="skills" className="skills-content">
                <h4>Experiência com:</h4>
                <ul>
                    {abilities.map(a => (
                        <li key={a}>{a}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}