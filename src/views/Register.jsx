import { NavLink, useNavigate } from "react-router";
import React, { useContext } from "react";
import { notifyContext } from "@/providers/notification/context";
import { storeContext } from "@/providers/store/context";
import asset2 from '@/assets/img/team-2-800x800.jpg'
import CardsProfile from "@/components/Cards/CardsProfile";

const Register = () => {
    const { store } = useContext(storeContext);
    const { handleNotify } = useContext(notifyContext);
    let navigate = useNavigate();

    const handleSubmit = async (formData) => {
        const { nurses, users } = store

        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");
        const password = formData.get("password").trim();
        const confirmpassword = formData.get("confirmpassword").trim();
        const contactnumber = formData.get("contactnumber");

        const checkPass = users.some(item => item.password == password)
        if (checkPass) {
            handleNotify({
                title: 'Warning',
                messages: 'User Already exists',
                status: 'warn',
            })
            return
        }
        if (password !== confirmpassword) {
            handleNotify({
                title: 'Warning',
                messages: 'Password mismatch',
                status: 'warn',
            })
            return
        }

        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;


        const loginDetails = {
            loginId: users.length + 1,
            nurseId: nurses.length + 1,
            userType: 1,
            username: `${lastname.toLowerCase()}_${firstname.split(' ')[0].toLowerCase()}`,
            password: password,
            lastLogin: `${formattedDate}`
        }

        const nurseDetails = {
            nurseId: nurses.length + 1,
            firstName: firstname,
            lastName: lastname,
            contactNumber: contactnumber,
            assignedStationId: 1,
            createdAt: `${formattedDate}`,
            updatedAt: ``
        }
        nurses.push(nurseDetails)
        users.push(loginDetails)
       

    }

    return (
        <>
            <div className="bg-slate-800 pt-[6rem] pb-[4rem]  min-h-[100vh] flex justify-center items-center">

                <div className="px-4 w-[20rem] lg:w-[30rem]">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">

                        <div className="flex-auto px-4 lg:px-10 py-10 ">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">
                                <small>Registration</small>
                            </div>
                            <form action={handleSubmit}>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Smith"
                                        required
                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="contactnumber"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="09123456789"
                                        pattern="[0-9]{4}[0-9]{7}"
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
                                        required
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmpassword"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                        required
                                    />
                                </div>



                                <div className="text-center mt-6">
                                    <button

                                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}
                    <div className="flex flex-wrap mt-6 relative">
                        <div className="w-1/2">
                            <div

                                className="text-blueGray-200"
                            >
                                <small>Already have an account?</small>
                            </div>
                        </div>
                        <div className="w-1/2 text-right">
                            <NavLink to="/auth/login" replace className="text-blueGray-200">
                                <small>Login</small>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Register