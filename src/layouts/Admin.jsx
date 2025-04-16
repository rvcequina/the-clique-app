import { Outlet } from "react-router"
import AdminNavbar from "@/components/Navbars/AdminNavbar"
import FooterAdmin from "@/components/Footers/AdminFooter"
import Sidebar from "@/components/Sidebars/Sidebar"
import HeaderStats from "@/components/Headers/HeaderStats"
const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 ">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        {/* <div className="px-4 md:px-10 mx-auto w-full min-h-[90vh] "> */}
          <Outlet />
          <FooterAdmin/>
          
        </div>
        
      </div>
    </>
  )
}
export default Admin