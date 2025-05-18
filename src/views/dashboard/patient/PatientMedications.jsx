import { useEffect, useContext, useState } from 'react'
import { storeContext } from '@/providers/store/context';
import CardTable from "@/components/Cards/CardTable";
const PatientMedications = () => {
    const { currentUser, getPatientMedicationById, getCurrentUser } = useContext(storeContext)
    const [data, setData] = useState()
    useEffect( () => {

        
        const newVal = async()=> {
             const x =  currentUser ?
            await getPatientMedicationById(currentUser.patientId)
            :
            await getPatientMedicationById(getCurrentUser().patientId)
            setData(x)
            
        }

        newVal()

        
      
    }, [])
    return (
        <div className="min-h-[60vh]">
            <CardTable title={'Medication History'} headers={['Id', 'Medication name', 'dosage', 'visited Date','Actions']} data={data} daterange />
        </div>
    )
}
export default PatientMedications;