import { useEffect, useContext, useState } from 'react'
import { storeContext } from '@/providers/store/context';
import CardTable from "@/components/Cards/CardTable";
const PatientResults = () => {
    const { currentUser, getPatientResultById, getCurrentUser } = useContext(storeContext)
    const [data, setData] = useState()
    useEffect( () => {

        
        const newVal = async()=> {
             const x =  currentUser ?
            await getPatientResultById(currentUser.patientId)
            :
            await getPatientResultById(getCurrentUser().patientId)
            setData(x)
            
        }

        newVal()

       
      
    }, [])
    return (
        <div className="min-h-[60vh]">
            <CardTable title={'Medication History'} headers={['Id', 'Laboratory Procedure', 'description', 'result', 'Test Date','Actions']} data={data} daterange />
        </div>
    )
}
export default PatientResults;