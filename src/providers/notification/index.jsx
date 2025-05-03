/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { notifyContext, NOTIFY_CONTEXT } from "@/providers/notification/context";
import Notification from "@/components/Alerts/Notification";
import Toaster  from "@/components/Alerts/Toaster"

const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState(NOTIFY_CONTEXT);
    const [notify, setNotify] = useState(false)
 


    const handleNotify = (data)=>{

        notification.list.push(data)
        setNotify(true)
    }
    const closeNotify = ()=>{
        setNotify(false)
       
    }

  


    return (
        <notifyContext.Provider
            value={{
                notification, 
                setNotification, 
                notify, 
                setNotify,
                handleNotify,
                closeNotify

            }}
        >
            {children}

            <Notification />
            <Toaster expand richColors position="top-center"/>

        </notifyContext.Provider>
    );
};

export default NotificationProvider;
