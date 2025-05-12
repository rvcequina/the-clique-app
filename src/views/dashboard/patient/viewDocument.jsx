// import { useEffect, useContext, useState } from 'react'

import { useEffect } from "react";

const ViewDocument = ({ showDocument = false, isVisible = () => { }, children }) => {

  useEffect(() => {
    console.log(showDocument, 'view')
  }, [showDocument])

  return (
    <>
      {
        showDocument ?
          <>
            <div className=" absolute   min-h-[100vh] z-20 w-full top-0 left-0">

              <div className="flex justify-center items-center  pt-10 px-2">
                <div className="h-[80vh]  w-[50%] sm:w-[100%] z-20 bg-white relative">
                  {children}
                  <div className="w-full flex justify-end absolute -top-4 -right-5 ">
                  <div className="w-8 h-8  hover:text-white hover:bg-sky-300 text-sky-600 bg-white rounded-full flex justify-center items-center">
                    <button onClick={() => isVisible()}>
                      
                        <i class="fa fa-times" aria-hidden="true"></i>
                      
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <>

          </>
      }
    </>

  )
}
export default ViewDocument;