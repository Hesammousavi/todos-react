import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";


export default function Root({}) {
    return (
        <div className="bg-gray-200">
            <Header />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Outlet />
            </div>
            <Footer />
        </ div>
    )
}
