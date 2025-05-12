import { useEffect, useContext, useState } from 'react'
import { storeContext } from '@/providers/store/context';
import CardsProfile from "@/components/Cards/CardsProfile"
const PatientProfile =()=>{
  const [user,setUser]=useState()
  const { currentUser, getPatientMedicationByid, getCurrentUser } = useContext(storeContext)
  useEffect(()=>{
    setUser(getCurrentUser())
    
  },[])
    return(
       <div className="min-h-[60vh]">
        test
         <CardsProfile user={user}/>
       </div>
    )
}
export default PatientProfile;