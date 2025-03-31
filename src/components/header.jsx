import Link from "next/link"

export const Header = () => {
    return (
        <header>
                <h1 className="logo">
                    <Link href="/">JF</Link>
                </h1>
                <nav className="header-nav">
                    <Link href="/">Home</Link>
                    <Link href="#about">Sobre</Link>
                    <Link href="#skills">Habilidades</Link>
                    <Link href="/projects">Projetos</Link>
                </nav>
        </header>
    )
}