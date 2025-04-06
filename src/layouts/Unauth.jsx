import { Outlet } from "react-router";

import Navbar from "@/components/Navbars/Navbar"
import Footer from "@/components/Footers/Footer";
const Unauth = () => {
    return (
        <div className="white-space">
            <Navbar transparent />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Unauth