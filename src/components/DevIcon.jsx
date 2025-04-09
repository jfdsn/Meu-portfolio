const skillIcons = {
    "HTML5": 'html5',
    "CSS3": 'css3',
    "JavaScript": 'javascript',
    "TypeScript": 'typescript',
    "Sass": 'sass',
    "React": 'react',
    "Vue": 'vuejs',
    "Next": 'nextjs',
    "Styled Components": 'style',
    "Node": 'nodejs',
    "Express": 'express',
    "PostgreSQL": 'postgresql',
    "MySQL": 'mysql',
    "TypeORM": 'cog',
    "JWT": 'key',
    "bcrypt": 'lock',
    "Jest": 'jest',
    "Docker": 'docker',
    "Git": 'git',
    "Github": 'github',
    "CI/CD": 'jenkins',
    "API Restful": 'web',
    "Integração de APIs": 'link',
    "Windows": 'windows8',
    "Linux": 'linux',
};

export const DevIcon = ({skill}) => {
    const icon = skillIcons[skill];

    //Handle missing icons and special devicons
    switch(icon) {
        case "lock":
            return <i className={`bx bx-${icon}`} style={{color: "black"}} />
        case "key":
            return <i className={`bx bx-${icon}`} style={{color: "black"}} />
        case "link":
            return <i className={`bx bx-${icon}-alt`} style={{color: "black"}} />
        case "cog":
            return <i className={`bx bx-${icon}`} style={{color: "black"}} />
        case "style":
            return <i className={`bx bx-code-block`} style={{color: "black"}} />
        case "express":
            return <i className={`devicon-${icon}-original colored`} /> 
    }

    return icon ? (
        <i className={`devicon-${icon}-plain colored`} />
    ) : (
        <span className="text-gray-500">🔧</span>
    );
}
