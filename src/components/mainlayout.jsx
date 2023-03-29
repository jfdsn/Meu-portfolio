import { Footer } from "./footer"
import { Header } from "./header"

export const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}