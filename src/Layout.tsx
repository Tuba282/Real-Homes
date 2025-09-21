import { Outlet } from "react-router-dom"
import NavBar from "./Components/Navbar"
import Footer from "./Components/Footer"

const Layout = () => {
    return (
        <div className="relative">
            <div className="w-full z-[1000] h-20 fixed"><NavBar /></div>
            <Outlet />
            <Footer />
        </div >
    )
}

export default Layout
