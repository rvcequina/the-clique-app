import React, { useState, useContext, useMemo, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "sonner"
import { storeContext } from "@/providers/store/context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserDropdown = () => {
    // dropdown props
    const { userLogout, getCurrentUser } = useContext(storeContext);
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const [user, setUser] = useState('')

    let navigate = useNavigate();



    const handleShow = () => {

        setDropdownPopoverShow(!dropdownPopoverShow)
    }

    useMemo(() => {
        // Component did mount logic here
        console.log('Component mounted');
        setUser(getCurrentUser())
        // Cleanup function to run when the component is destroyed

    }, [getCurrentUser]);


    const handleLogout = async () => {

        toast.info("INFO", {
            description: `${user?.firstName} ${user?.lastName} you have been successfully logged off.`,
        })
        userLogout()
        navigate('/')
    }


    return (
        <>
            <div className="relative cursor-pointer">
                <div
                    className="text-blueGray-500 block"
                    onClick={() => handleShow()}
                >
                    <div className="items-center flex">
                        <Avatar className={'w-[3rem] h-[3rem] shadow-md'}>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>{user?.firstName?.split("")[0]} {user?.lastName?.split("")[0]}</AvatarFallback>
                        </Avatar>
                        {/* <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">

                            <div

                                className="h-12 w-12 bg-gray-500 text-white flex text-lg    justify-center items-center rounded-full border"
                                alt="..."
                            ></div>
                        </span> */}
                    </div>
                </div>
                {
                    dropdownPopoverShow ?
                        <div

                            className={
                                " bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute top-15 right-0"
                            }
                        >
                            {
                                user?.userType == 1 ?
                                    <>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="admin/"
                                            replace
                                            onClick={() => handleShow()}
                                        >
                                            Analytics
                                        </NavLink>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="admin/patient-list/"
                                            replace
                                            onClick={() => handleShow()}
                                        >
                                            Patient Data
                                        </NavLink>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="admin/"
                                            replace
                                        >
                                            Profile
                                        </NavLink>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="admin/"
                                            replace
                                            onClick={() => handleShow()}
                                        >
                                            Settings
                                        </NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="/dashboard/patient/"
                                            replace
                                            onClick={() => handleShow()}
                                        >
                                            Profile
                                        </NavLink>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="/dashboard/patient/medications"
                                            onClick={() => handleShow()}
                                        >
                                            Medications
                                        </NavLink>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="/dashboard/patient/results/"
                                            replace
                                            onClick={() => handleShow()}
                                        >
                                            Laboratory Results
                                        </NavLink>
                                        <NavLink

                                            className={
                                                "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                            }
                                            to="/dashboard/patient/recommendations/"
                                            replace
                                            onClick={() => handleShow()}
                                        >
                                            Doctor's Recommendations
                                        </NavLink>
                                    </>
                            }

                            <div className="h-0 my-2 border border-solid border-blueGray-100" />
                            <div
                                onClick={() => handleLogout()}
                                className={
                                    "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                }

                            >
                                Log out
                            </div>
                        </div>
                        : ''
                }
            </div>



        </>
    );
};

export default UserDropdown;
