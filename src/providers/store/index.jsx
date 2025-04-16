/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { storeContext, STORE_CONTEXT } from "@/providers/store/context.jsx";

const StoreProvider = ({ children }) => {
    const [store, setStore] = useState(STORE_CONTEXT);
    const [currentUser, setCurrentUser] = useState()

    const getTotalNurses = () => {
        return store.nurses.length
    }

    const getTotalPatients = () => {
      
        return store.patients.length
    }

    const getTotalAdmitted = () => {
        const admitted =  store.patients.filter(item => item.isAdmitted == true)
       
      return admitted.length
    }
    // const getNurseById = (id)=>{

    // }


    return (
        <storeContext.Provider
            value={{
                store,
                setStore,
                currentUser,
                setCurrentUser,
                getTotalNurses,
                getTotalPatients,
                getTotalAdmitted
                

            }}
        >
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;
