import { useEffect, useContext, useState } from 'react'
import { storeContext } from '@/providers/store/context';
import CardTable from "@/components/Cards/CardTable";
const Medicatons = () => {
    const { currentUser, getPatientMedicationByid, getCurrentUser } = useContext(storeContext)
    const [data, setData] = useState()
    useEffect( () => {

        
        const newVal = async()=> {
             const x =  currentUser ?
            await getPatientMedicationByid(currentUser.patientId)
            :
            await getPatientMedicationByid(getCurrentUser().patientId)
            setData(x)
            
        }

        newVal()

        
      
    }, [])
    return (
        <div className="min-h-[60vh]">
            <CardTable title={'Medication History'} headers={['Id', 'Medication name', 'dosage', 'frequency', 'visited Date','Actions']} data={data} daterange />
        </div>
    )
}
export default Medicatons;