import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import ViewPatient from "@/views/dashboard/admin/viewPatient";
// components
import { storeContext } from "@/providers/store/context";
import useSearchPatient from '@/hooks/useSearchPatient';


export default function CardPatients({ color }) {
  const { store, getPatientById } = useContext(storeContext)
  const [patientList, setPatientList] = useState([])
  const { searchResults, searchInArray } = useSearchPatient();
  const navigate = useNavigate();
  const state = {
    data: {
      name: 'john',
      age: 35
    }
  };

  const handleSearch = (formData) => {
    const query = formData.get("query");
    searchInArray(patientList, query);
  }

  useEffect(() => {

    store.patients.map(async item => {
      const currentPatient = await getPatientById(item.patientId);
      if (currentPatient) {
        setPatientList(prev => {
          if (!prev.some(patient => patient.patientId === currentPatient.patientId)) {
            // Only add the patient if they don't already exist in the list
            return [...prev, currentPatient];
          }
          return prev; // No changes if the patient is already present
        });
      }
    });


  }, [store.patients])

  useEffect(() => {
    if (patientList) {
      searchInArray(patientList, '');
    }
  }, [patientList])

  const handleView = (id) => {
    navigate(`/dashboard/admin/patient/${id}`, { state: state ,replace:true});
  }


  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Patient List
              </h3>
            </div>
            <form action={handleSearch} className="flex flex-row flex-wrap items-center lg:ml-auto mr-3">
              <div className="relative flex w-full flex-wrap items-stretch">
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  name="query"
                  placeholder="Search here..."
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}

          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Patient Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Address
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Age
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Station
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                searchResults?.map(item => {
                  return (<tr key={item.patientId}>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <div

                        className="h-12 w-12 bg-gray-400 text-black flex text-lg    justify-center items-center rounded-full border"
                        alt="..."
                      >{item.firstName?.split("")[0]} {item.lastName?.split("")[0]}</div>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light" ? "text-blueGray-600" : "text-white")
                        }
                      >
                        {`${item.firstName} ${item.lastName}`}
                      </span>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.address}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {new Date().getFullYear() - new Date(item.dob).getFullYear()}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex">
                        {item.assignedStation?.stationName}
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2 flex w-[5rem]  justify-between items-center gap-2">
                          {item.isAdmitted ?
                            <div className="relative w-[0.5rem]">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                <div
                                  style={{ width: "100%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                ></div>
                              </div>
                            </div> :
                            <div className="relative w-[0.5rem]">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div
                                  style={{ width: "100%" }}
                                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                ></div>
                              </div>
                            </div>
                          }
                          <div>{item.isAdmitted ? 'Admitted' : 'Discharged'}</div>
                        </span>

                      </div>
                    </td>
                    <td onClick={() => handleView(item.patientId)} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      {/* <TableDropdown /> */}
                      <div className="flex gap-4 items-center cursor-pointer w-max p-2 px-4 hover:bg-white hover:text-lightBlue-600">
                        <i className="fas fa-eye"></i>
                        View
                      </div>

                    </td>
                  </tr>)
                })
              }


            </tbody>
          </table>
        </div>
      </div>

    </>
  );
}

