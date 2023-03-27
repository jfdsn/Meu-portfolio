import Link from "next/link"

export const Header = () => {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/projects">Projetos</Link>
            </nav>
        </header>
    )
}