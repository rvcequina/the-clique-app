/* eslint-disable no-unused-vars */
import {  useState,useEffect } from "react";
import {  storeContext,STORE_CONTEXT } from "@/providers/store/context.jsx";

const StoreProvider = ({ children }) => {
    const [store, setStore] = useState(STORE_CONTEXT);
    const [currentUser,setCurrentUser]=useState()

    return (
        <storeContext.Provider
            value={{
                store,
                setStore,
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;
