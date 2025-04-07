export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer> @Copyright {currentYear} - Feito com Nextjs</footer>
    )
}