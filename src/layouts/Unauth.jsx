import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from "react-router";

import Navbar from "@/components/Navbars/Navbar"
import Footer from "@/components/Footers/Footer";

const Unauth = () => {
    const [isAuth, setIsAuth] = useState(false)
    const location = useLocation()
    useEffect(() => {
        if (location?.pathname == '/auth/login') {
            setIsAuth(true)
        }
    }, [location])
    return (
        <div className="white-space relative">
            <Navbar transparent isAuth={isAuth} />
            <Outlet />
            <Footer />
           
        </div>
    )
}

export default Unauth