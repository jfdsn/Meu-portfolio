import Link from "next/link"
import { useState } from "react"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
            <h1 className="logo">
                <Link href="/">JF</Link>
            </h1>
            <nav>
                <div 
                    className="hamburger" 
                    onClick={toggleMenu} 
                    role="button" 
                    tabIndex={0} 
                    onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu() }} 
                    aria-label="Alternar Menu"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className={`menu ${isMenuOpen ? "active" : ""}`}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
                        Sobre
                    </Link>
                    <Link href="/#skills" onClick={() => setIsMenuOpen(false)}>
                        Habilidades
                    </Link>
                    <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                        Projetos
                    </Link>
                </div>
            </nav>
        </header>
    )
}