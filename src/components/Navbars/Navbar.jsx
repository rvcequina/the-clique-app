import React, { useState, useContext,useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import Logo from '@/assets/img/logo.svg'
import { storeContext } from "@/providers/store/context";
const Navbar = ({ isAuth }) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { currentUser } = useContext(storeContext);
    const navigate = useNavigate();

    const handleGoBack = (event) => {
        event.preventDefault();
        navigate(-1); // Go back one step
    };

    return (
        <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full lg:  w-[20%] relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <div className="flex items-center flex-col mr-4">
                        <NavLink

                            to="/"
                        >
                            <img
                                alt="..."
                                src={Logo}
                                className="w-10"
                            />
                        </NavLink >
                        <NavLink
                            className=" text-sm font-bold leading-relaxed inline-block  py-2 whitespace-nowrap uppercase border-0 outline-none"
                            to="/"
                        >
                            <div className="text-cyan-500"> The Clique</div>
                        </NavLink >
                    </div>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="text-white fas fa-bars"></i>
                    </button>
                </div>
                <div
                    className={
                        `w-[80%] flex flex-grow items-center justify-between lg:bg-opacity-0  lg:shadow-none`
                    }
                    id="example-navbar-warning"
                >
                    {navbarOpen ? (
                        ""
                    ) : (
                        <ul className="hidden md:flex  justify-between flex-row w-full list-none mr-auto">

                            {

                                <div className="flex w-[50%] pl-4">
                                    {!isAuth ? <>
                                        <li className="flex items-center">
                                            <a
                                                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                                href="#services"
                                            >
                                                Services
                                            </a >
                                        </li>
                                        <li className="flex items-center">
                                            <a
                                                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                                href="#aboutus"
                                            >
                                                About Us
                                            </a >
                                        </li>
                                    </> : ''}
                                </div>
                            }

                            {
                                !currentUser ?
                                    <div className="flex w-[50%] justify-end pr-4">
                                        {!isAuth ?
                                            <li className="flex items-center">
                                                <NavLink
                                                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                                    to="auth/login"
                                                    replace
                                                >
                                                    Login
                                                </NavLink >
                                            </li> : <li className="flex items-center">
                                                <NavLink
                                                    className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                                    to="/" 
                                                >
                                                    Go Back
                                                </NavLink >
                                            </li>}
                                        {/* <li className="flex items-center">
                                            <NavLink to="auth/register">
                                                <button
                                                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    <i className="fas fa-user-plus"></i> Register
                                                </button>
                                            </NavLink >
                                        </li> */}
                                    </div>
                                    : <li className="flex items-center">
                                        <NavLink
                                            className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                            to="#" onClick={handleGoBack}
                                        >
                                            Dashboard
                                        </NavLink >
                                    </li>
                            }


                        </ul>
                    )}



                    {/* mobile */}
                    <ul
                        className={`w-full md:hidden flex list-none justify-end`}
                    >
                        {navbarOpen ? (
                            <>
                                <div className="flex flex-col items-center lg:ml-auto w-[12rem]   bg-white shadow-md rounded">

                                    {
                                        !isAuth ?
                                            <>
                                                <a
                                                    className="w-full flex justify-center items-center p-4 text-indigo-900 text-sm hover:text-white hover:bg-sky-700"
                                                    href="#services"
                                                >
                                                    <li className=" font-bold leading-relaxed  whitespace-nowrap uppercase">
                                                        Services
                                                    </li>
                                                </a >

                                                <a
                                                    className="w-full flex justify-center items-center p-4 text-indigo-900 text-sm hover:text-white hover:bg-sky-700"
                                                    href="#aboutus"
                                                >
                                                    <li className=" font-bold leading-relaxed  whitespace-nowrap uppercase">
                                                        About Us
                                                    </li>
                                                </a >
                                            </>
                                            : ''
                                    }
                                    {!currentUser ? <>
                                        <hr />
                                        {!isAuth ?
                                            <NavLink
                                                className="w-full flex justify-center items-center p-4 text-indigo-900 text-sm hover:text-white hover:bg-sky-700"
                                                to="auth/login"
                                                replace
                                            >
                                                <li className=" font-bold leading-relaxed  whitespace-nowrap uppercase">
                                                    Login
                                                </li>
                                            </NavLink >
                                            :
                                            <NavLink
                                                className="w-full flex justify-center items-center p-4 text-indigo-900 text-sm hover:text-white hover:bg-sky-700"
                                                to="/" 
                                            >
                                                <li className=" font-bold leading-relaxed  whitespace-nowrap uppercase">
                                                    Go back
                                                </li>
                                            </NavLink >}
                                        {/* <NavLink
                                            className="w-full flex justify-center items-center p-4 text-indigo-900 text-sm hover:text-white hover:bg-sky-700"
                                            to="auth/register"
                                        >
                                            <li className=" font-bold leading-relaxed  whitespace-nowrap uppercase">
                                                Register
                                            </li>
                                        </NavLink > */}
                                    </> : <NavLink
                                        className="w-full flex justify-center items-center p-4 text-indigo-900 text-sm hover:text-white hover:bg-sky-700"
                                        to="#" onClick={handleGoBack}
                                    >
                                        <li className=" font-bold leading-relaxed  whitespace-nowrap uppercase">
                                            Dashboard
                                        </li>
                                    </NavLink >}
                                </div>
                            </>


                        ) : ''}


                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar