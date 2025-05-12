// import { useState } from 'react'
import { useLocation } from "react-router";
const ViewPatient = () => {
  const location = useLocation();
  const { data } = location.state || {};


  return (
    <>
      {

        <>
          <div className="flex flex-wrap">
            <div className="w-full flex justify-end">
            </div>
            <div className="flex justify-center items-center">
              <div className="h-[80vh] w-[50%] z-20 bg-white">
                {data.name}
              </div>
            </div>
          </div>
        </>

      }
    </>

  )
}
export default ViewPatient;