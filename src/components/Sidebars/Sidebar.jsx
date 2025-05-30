/*eslint-disable*/
import React, { useEffect, useContext, useState, useMemo } from "react"
import { NavLink } from "react-router"
import { useLocation } from "react-router"
import Logo from '@/assets/img/logo.svg'

import UserDropdown from "@/components/Dropdowns/UserDropdown"

const Sidebar = ({ user }) => {
  const [collapseShow, setCollapseShow] = React.useState("hidden")

  const [isAdmin, setIsAdmin] = useState(true)
  const location = useLocation()
  useMemo(() => {
    if (user) {
      setIsAdmin(user.userType == 1 ? true : false)
    }

  }, [user])

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          {/* <NavLink
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            The Clique
          </NavLink> */}
          <div className="flex items-center gap-4 mr-4">
            <NavLink

              to="/"
            >
              <img
                alt="..."
                src={Logo}
                className="w-10"
              />
            </NavLink >
            <NavLink
              className=" text-sm font-bold leading-relaxed inline-block  py-2 whitespace-nowrap uppercase border-0 outline-none"
              to="/"
            >
              <div className="text-cyan-500"> The Clique</div>
            </NavLink >
          </div>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  {/* <NavLink
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    The Clique
                  </NavLink> */}
                  <div className="flex items-center flex-col mr-4">
                    <NavLink

                      to="/"
                    >
                      <img
                        alt="..."
                        src={Logo}
                        className="w-10"
                      />
                    </NavLink >
                    <NavLink
                      className=" text-sm font-bold leading-relaxed inline-block  py-2 whitespace-nowrap uppercase border-0 outline-none"
                      to="/"
                    >
                      <div className="text-cyan-500"> The Clique</div>
                    </NavLink >
                  </div>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>

                  </button>
                </div>
              </div>
            </div>
            <div className="h-0 my-2 border border-solid border-blueGray-100" />



            {isAdmin ?
              <>
                {/* Admin */}
                <hr className="my-4 md:min-w-full" />

                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  Admin
                </h6>


                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                  <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/admin/"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="admin/"
                      replace

                    >
                      <i
                        className={
                          "fas fa-tv mr-2 text-sm " +
                          (location.pathname == "/dashboard/admin/"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Analytics
                    </NavLink>
                  </li>

                  <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/admin/patient-list/"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="admin/patient-list/"
                    >
                      <i
                        className={
                          "fas fa-tools mr-2 text-sm " +
                          (location.pathname == "/dashboard/admin/patient-list/"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Patient Data
                    </NavLink>
                  </li>
                    <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/admin/medications-list/"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="admin/medications-list/"
                    >
                      <i
                        className={
                          "fas fa-tools mr-2 text-sm " +
                          (location.pathname == "/dashboard/admin/medications-list/"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Medications List
                    </NavLink>
                  </li>


                </ul>
              </>
              :

              <>
                {/* Patient */}
                <hr className="my-4 md:min-w-full" />

                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  Patient
                </h6>


                <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                  <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/patient/"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/dashboard/patient/"
                      replace
                    >
                      <i
                        className={
                          "fas fa-user mr-2 text-sm " +
                          (location.pathname == "/dashboard/patient/"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Profile
                    </NavLink>
                  </li>

                  <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/patient/medications"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/dashboard/patient/medications"
                    >
                      <i
                        className={
                          "fas fa-medkit mr-2 text-sm " +
                          (location.pathname == "/dashboard/patient/medications"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Medication
                    </NavLink>
                  </li>

                  <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/patient/results"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/dashboard/patient/results"
                    >
                      <i
                        className={
                          "fas fa-tools mr-2 text-sm " +
                          (location.pathname == "/dashboard/patient/results"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Laboratory Results
                    </NavLink>
                  </li>
                  <li className="items-center">
                    <NavLink
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == "/dashboard/patient/recommendations"
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to="/dashboard/patient/recommendations"
                    >
                      <i
                        className={
                          "fas fa-user-md mr-2 text-sm " +
                          (location.pathname == "/dashboard/patient/recommendations"
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      ></i>{" "}
                      Doctor's Recommendation
                    </NavLink>
                  </li>
                </ul>
              </>
            }




          </div>
        </div>

      </nav>
    </>
  );
}

export default Sidebar
