import React,{useEffect,useContext} from "react";
import { storeContext } from "@/providers/store/context";
// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

const Index=()=> {
  const { currentUser  } = useContext(storeContext);

  useEffect(()=>{
    console.log(currentUser)
  })
  return (
    <>
      <div className="flex flex-wrap pt-[5rem]">
        <div className="w-full bg-blue-400 xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
          test
        </div>
        <div className="w-full  bg-blue-400 xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
          test
        </div>
        dashboard
      </div>
      {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
    </>
  );
}

export default Index
