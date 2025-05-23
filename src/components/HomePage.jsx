import Image from "next/image"
import { DevIcon } from "./DevIcon"
import { ActionBtn } from "./ActionBtn"



export const HomePage = ({ profile }) => {

    return (
        <>
            <section id="hero" className="hero-section">
                    <div className="hero-content">
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
                    <ActionBtn link={"/#about"} />
            </section>
            <section id="about" className="about-section">
                <h3>Sobre</h3>
                <div className="container">
                    <div className="about-content" data-aos="fade-up">
                        {profile.about}
                    </div>
                </div>
                <ActionBtn link={"/#skills"} />
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