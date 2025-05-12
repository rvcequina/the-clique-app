// import { useEffect, useContext, useState } from 'react'

const ViewDocument = ({ showDocument = false, patientId, isVisible = () => { }, children }) => {



    return (
      <>
        {
          showDocument ?
            <>
              <div className=" absolute   min-h-[100vh] z-20 w-full top-0 left-0">
                <div className="w-full flex justify-end">
                  <button onClick={() => isVisible()}>
                    click me {patientId}
                  </button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="h-[80vh] w-[50%] z-20 bg-white">
                      {children}
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