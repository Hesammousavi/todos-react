import Footer from "./Footer";
import Header from "./Header";


export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
            </div>
            <Footer />
        </>
    )
}
