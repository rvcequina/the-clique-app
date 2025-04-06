import { Outlet } from "react-router"
import AdminNavbar from "@/components/Navbars/AdminNavbar"
import FooterAdmin from "@/components/Footers/AdminFooter"
import Sidebar from "@/components/Sidebars/Sidebar"
const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 ">
        <AdminNavbar />
        {/* Header */}
        {/* <HeaderStats /> */}
        
        <div className="px-4 md:px-10 mx-auto w-full min-h-[90vh] ">
          <Outlet />
          test
          
        </div>
        <FooterAdmin/>
      </div>
    </>
  )
}
export default Admin