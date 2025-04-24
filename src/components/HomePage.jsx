import Image from "next/image"
import { DevIcon } from "./DevIcon"



export const HomePage = ({ profile }) => {

    return (
        <>
            <section id="about" className="hero-content">
                <div className="info-content">
                    <Image alt='perfil image' width={240} height={268} src='/foto-perfil.webp' />
                    <h1>Oi, sou <span>{profile.name}</span></h1>
                    <h3>{profile.title}</h3>
                    <div className="social-links">
                        <a href={profile.contact.links.github} target="_blank">
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href={profile.contact.links.linkedin} target="_blank">
                            <i className='bx bxl-linkedin-square'></i>
                        </a>
                    </div>
                    <div className="email">
                        <a href="mailto:jonathanfdsn@gmail.com">
                            <i className='bx bxs-envelope'>
                                {profile.contact.email}
                            </i>
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
                    {profile.about}
                </div>
            </section>
            <section id="skills" className="skills-content">
                <h3>Habilidades</h3>
                {Object.entries(profile.skills).map(([category, skills]) => (
                    <div key={category} className="category-content">
                        <h2>{category}:</h2>
                        <div className="skills-container">
                            {skills.map(skill => (
                                <div className="skill-card" key={skill}>
                                    <DevIcon skill={skill} />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}