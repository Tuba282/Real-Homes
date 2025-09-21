import { Outlet } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"

const Layout = () => {
    return (
        <div className="relative">
            <div className="w-full z-[10] h-20 absolute top-0 left-0">
                <NavBar />

            </div>
            <Outlet />
            <Footer />
        </div >
    )
}

export default Layout
