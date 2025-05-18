// import { useState, useContext, useMemo } from 'react'

// import { storeContext } from "@/providers/store/context";

import { useNavigate } from "react-router";


const RegisterNewPatient = () => {

    const navigate = useNavigate();
    return (
        <>
            {

                <>
                    <div className="flex min-h-[60vh]">

                        <div className="w-full bg-white flex flex-col  p-4 z-20 relative">
                            <div className="flex justify-end absolute -top-5 -right-3 z-40">
                                <button onClick={() => navigate(`/dashboard/admin/patient-list/`)}>
                                    <div className="w-8 h-8  hover:text-white hover:bg-sky-300 text-sky-100 bg-sky-900 rounded-full shadow-lg flex justify-center items-center">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </button>
                            </div>
                            test
                        </div>

                    </div>
                </>

            }
        </>

    )
}
export default RegisterNewPatient;