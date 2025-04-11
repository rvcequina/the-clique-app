import React, { useEffect, useState,useContext } from "react";


import { storeContext } from "@/providers/store/context";
const Notification = ({status,message,title}) => {
const {handleNotif,showNotif } = useContext(storeContext);
const [showAlert,setShowAlert]= useState(false);

useEffect(()=>{
  setShowAlert(showNotif)
},[showNotif])
  return (
    <>
      
       
        <div
          className={` fixed top-20 right-0 z-20 right-0 text-white w-3/4 lg:w-[30rem]  px-6 py-4 border-0 rounded  mb-4 notif ${showAlert?'slide-in':''} ${status == 'warn'?'bg-red-500':'bg-emerald-500'}`}
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            <b className="capitalize">{title}!</b> {message}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={()=>handleNotif(!showNotif)}
          >
            <span className="pr-2">×</span>
          </button>
        </div>
      
    </>
  );
};

export default Notification;