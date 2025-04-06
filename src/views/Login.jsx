import { NavLink, useNavigate } from "react-router";
import React, { useContext } from "react";

import { storeContext } from "@/providers/store/context";


const Login = () => {
    const { store, setCurrentUser } = useContext(storeContext);
    let navigate = useNavigate();


    const handleSubmit = (formData) => {
        const { nurseLogin, nurses } = store

        const username = formData.get("username");
        const password = formData.get("password");

        const checkUser = nurseLogin.some(item => item.username == username)

        if (!checkUser) {
            return
        }

        const checkPass = nurseLogin.some(item => item.password == password)
        if (!checkPass) {
            return
        }

        const user = nurses.find(item => item.nurseId == nurseLogin.find(item => item.username == username).nurseId)

        setCurrentUser(user)

        navigate("/dashboard");

    }

    return (
        <>
            <div className="bg-slate-800 pt-[6rem] pb-[4rem]  min-h-[100vh] flex justify-center items-center">

                <div className="px-4 w-[20rem] lg:w-[30rem]">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                        <div className="flex-auto px-4 lg:px-10 py-10 ">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">
                                <small>sign in with your credentials</small>
                            </div>
                            <form action={handleSubmit}>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            id="customCheckLogin"
                                            type="checkbox"
                                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        />
                                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>

                                <div className="text-center mt-6">
                                    <button

                                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
                    <div className="flex flex-wrap mt-6 relative">
                        <div className="w-1/2">
                            <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                className="text-blueGray-200"
                            >
                                <small>Forgot password?</small>
                            </a>
                        </div>
                        <div className="w-1/2 text-right">
                            <NavLink to="auth/register" className="text-blueGray-200">
                                <small>Create new account</small>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Login