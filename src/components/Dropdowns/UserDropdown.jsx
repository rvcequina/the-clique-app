import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";

import { storeContext } from "@/providers/store/context";
const UserDropdown = () => {
    // dropdown props
    const {  setCurrentUser, getCurrentUser } = useContext(storeContext);
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

    let navigate = useNavigate();

    const handleShow = () => {
        setDropdownPopoverShow(!dropdownPopoverShow)
    }
    

    const handleLogout = ()=>{
        setCurrentUser()
        localStorage.removeItem("user");
        navigate('/')
    }


    return (
        <>
            <div className="relative cursor-pointer">
                <a
                    className="text-blueGray-500 block"
                    onClick={handleShow}
                >
                    <div className="items-center flex">
                        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                          
                            <div

                                className="h-12 w-12 bg-gray-400 text-black flex text-lg    justify-center items-center rounded-full border"
                                alt="..."
                            >{getCurrentUser().firstName?.split("")[0]} {getCurrentUser().lastName?.split("")[0]}</div>
                        </span>
                    </div>
                </a>
                {
                    dropdownPopoverShow ?
                        <div

                            className={
                                " bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute top-15 right-0"
                            }
                        >
                            <a
                                href="#pablo"
                                className={
                                    "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Analytics
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Patient Data
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Profile
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "cursor-pointer py-2 px-4 text-sm font-normal block w-full whitespace-nowrap text-gray-600 hover:text-white hover:bg-blue-500"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Settings
                            </a>
                            <div className="h-0 my-2 border border-solid border-blueGray-100" />
                            <div
                               onClick={()=>handleLogout()}
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
