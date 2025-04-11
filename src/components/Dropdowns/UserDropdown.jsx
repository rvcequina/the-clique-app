import React, { useState } from "react";

import asset1 from '../../assets/img/team-1-800x800.jpg'

const UserDropdown = () => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const handleShow = () => {
        setDropdownPopoverShow(!dropdownPopoverShow)
    }
    return (
        <>
            <div className="relative">
                <a
                    className="text-blueGray-500 block"
                    href="#pablo"
                    onClick={handleShow}
                >
                    <div className="items-center flex">
                        <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                            <img
                                alt="..."
                                className="w-full rounded-full align-middle border-none shadow-lg"
                                src={asset1}
                            />
                        </span>
                    </div>
                </a>
                {
                    dropdownPopoverShow ?
                        <div

                            className={
                                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 absolute top-15 right-0"
                            }
                        >
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Another action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Something else here
                            </a>
                            <div className="h-0 my-2 border border-solid border-blueGray-100" />
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                }
                                onClick={(e) => e.preventDefault()}
                            >
                                Seprated link
                            </a>
                        </div>
                        : ''
                }
            </div>



        </>
    );
};

export default UserDropdown;
