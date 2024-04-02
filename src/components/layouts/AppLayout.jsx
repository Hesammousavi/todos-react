import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout({ children }) {


    return (
        <>
            <Header />
            <div className="bg-gray-100">
                { children }
            </div>
            <Footer />
        </>

    )
}
