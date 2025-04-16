import React, { useEffect, useState, useContext } from "react";
import { notifyContext } from "@/providers/notification/context";

const Notification = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { notify, notification, closeNotify } = useContext(notifyContext);
  const [notifMessage, setNotifMessage] = useState({})
  useEffect(() => {
    showNotifications(notification.list)
  }, [notify])


  const showNotifications = async (notificationList) => {


    for (let item in notificationList) {
      setNotifMessage(notificationList[item]);

      await new Promise((resolve) => {
        setTimeout(() => {
          setShowAlert(true); //  Show alert for the current item
          resolve();
        }, 500); // 3000ms delay before hiding the alert
      });

      await new Promise((resolve) => {
        setTimeout(() => {
          setShowAlert(false); // Hide alert before moving to the next item
          resolve();
        }, 3000); // 3000ms delay before hiding the alert
      });
      notificationList.splice(notificationList.indexOf(item), 1)
    }
    closeNotify();
  }
  return (
    <>


      <div
        className={` fixed top-20 right-0 z-20 right-0 text-white w-3/4 lg:w-[30rem]  px-6 py-4 border-0 rounded  mb-4 notif ${showAlert ? 'slide-in' : ''} ${notifMessage?.status == 'warn' ? 'bg-red-500' : 'bg-emerald-500'}`}
      >
        <span className="text-xl inline-block mr-5 align-middle">
          <i className="fas fa-bell" />
        </span>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">{notifMessage?.title}!</b> {notifMessage?.messages}
        </span>
        <button
          className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"

        >
          <span className="pr-2">×</span>
        </button>
      </div>

    </>
  );
};

export default Notification;