/* eslint-disable no-unused-vars */
import {  useState,useEffect } from "react";
import {  storeContext,STORE_CONTEXT } from "@/providers/store/context.jsx";

const StoreProvider = ({ children }) => {
    const [store, setStore] = useState(STORE_CONTEXT);
    const [currentUser,setCurrentUser]=useState()
    const [showNotif, setShowNotif] = useState(false);


    const handleNotif=(val)=>{
        
        setShowNotif(val)
    }
    return (
        <storeContext.Provider
            value={{
                store,
                setStore,
                currentUser,
                setCurrentUser,
                showNotif, 
                handleNotif
            }}
        >
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;
