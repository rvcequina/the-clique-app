import {useEffect,useContext } from 'react'
import {  useNavigate } from "react-router";
import { Outlet } from "react-router"
import AdminNavbar from "@/components/Navbars/AdminNavbar"
import FooterAdmin from "@/components/Footers/AdminFooter"
import Sidebar from "@/components/Sidebars/Sidebar"
import HeaderStats from "@/components/Headers/HeaderStats"
import React from "react"
import { storeContext } from "@/providers/store/context"
const Dashboard = () => {
   const { currentUser,setCurrentUser } = useContext(storeContext)
  let navigate = useNavigate();
  useEffect(()=>{
    checkUser()
  })

  const checkUser = ()=>{
    const getUser = localStorage.getItem('user');
    
    if(!currentUser){
      if(getUser){
        setCurrentUser(JSON.parse(getUser))
      }
      else{
        navigate('/auth/login')
      }
    }
  }
  return (
    <>
      <Sidebar user={currentUser} />
      <div className="relative md:ml-64 bg-blueGray-100 ">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats user={currentUser} />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        {/* <div className="px-4 md:px-10 mx-auto w-full min-h-[90vh] "> */}
          <Outlet />
          <FooterAdmin/>
          
        </div>
        
      </div>
    </>
  )
}
export default Dashboard