import React, { useContext, useEffect, useState } from "react";

// components
import CardStats from "@/components/Cards/CardStats";
import { storeContext } from "@/providers/store/context";

const HeaderStats = ({ user }) => {

  const { getTotalNurses, getTotalPatients, getTotalAdmitted, getHistoryById, store, currentUser, getCurrentUser } = useContext(storeContext);
  const [total, setTotal] = useState({
    nurses: 0,
    patients: 0,
    admitted: 0,
    stats: '49,65%'
  })

  const [patientStats, setPatientStats] = useState({
    encounter: 0,
    results: 0,
    diagnosis: 0,
    lastvisit:''
  })

  useEffect(() => {

    getTotal()
    getPatientStats()
  }, [store])

  const getTotal = () => {

    total.nurses = getTotalNurses()
    total.patients = getTotalPatients()
    total.admitted = getTotalAdmitted()

  }

  const getPatientStats = () => {
    const user = currentUser ? currentUser : getCurrentUser()
    patientStats.encounter = getHistoryById(user.patientId).length
    patientStats.results = getHistoryById(user.patientId).filter(item => item.resultId != '').length
    patientStats.diagnosis = getHistoryById(user.patientId).filter(item => item.diagnosisId != '').length
    patientStats.lastvisit =getHistoryById(user.patientId)[getHistoryById(user.patientId).length-1].visitedDate
  }

  return (
    <>
      {/* Header */}
      <div className="relative bg-sky-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {
                user?.userType == 1 ?
                  <>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Total Nurses"
                        statTitle={total.nurses}
                        statArrow="up"
                        statPercent="3.48"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="far fa-chart-bar"
                        statIconColor="bg-red-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Total Patients"
                        statTitle={total.patients}
                        statArrow="down"
                        statPercent="3.48"
                        statPercentColor="text-red-500"
                        statDescripiron="Since last week"
                        statIconName="fas fa-chart-pie"
                        statIconColor="bg-orange-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Total Admitted"
                        statTitle={total.admitted}
                        statIconName="fas fa-users"
                        statIconColor="bg-pink-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Readmission Rate"
                        statTitle={total.stats}
                        statArrow="up"
                        statPercent="12"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="fas fa-percent"
                        statIconColor="bg-lightBlue-500"
                      />
                    </div>
                  </>
                  :
                  <>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Total Encounter"
                        statTitle={patientStats.encounter}
                        statArrow="up"
                        statPercent="3.48"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="far fa-chart-bar"
                        statIconColor="bg-red-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Total Results"
                        statTitle={patientStats.results}
                        statArrow="down"
                        statPercent="3.48"
                        statPercentColor="text-red-500"
                        statDescripiron="Since last week"
                        statIconName="fas fa-chart-pie"
                        statIconColor="bg-orange-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Diagnosis History"
                        statTitle={patientStats.diagnosis}
                        statIconName="fas fa-users"
                        statIconColor="bg-pink-500"
                      />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                      <CardStats
                        statSubtitle="Date of Last Visit"
                        statTitle={patientStats.lastvisit}
                        statArrow="up"
                        statPercent="12"
                        statPercentColor="text-emerald-500"
                        statDescripiron="Since last month"
                        statIconName="fas fa-calendar"
                        statIconColor="bg-lightBlue-500"
                      />
                    </div>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderStats;