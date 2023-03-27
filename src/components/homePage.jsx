export const HomePage = ({ perfil }) => {
    return (
        <>
            <h1>{perfil.name}</h1>
            <p>{perfil.about}</p>
            <p>{perfil.abilities}</p>
            <a href={perfil.links.github}>GitHub</a>
            <a href={perfil.links.linkedin}>LinkedIn</a>
        </>
    )
}