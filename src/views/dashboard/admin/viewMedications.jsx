import { useState, useContext, useMemo } from 'react'

import { storeContext } from "@/providers/store/context";
import CardTable from "@/components/Cards/CardTable";



const ViewMedications = () => {
    const { getMedicationById } = useContext(storeContext)
    const [data, setData] = useState()

    useMemo(() => {
        setData(getMedicationById())

    }, [])
    return (
        <>
            {

                <>
                    <div className="flex min-h-[60vh]">


                        <CardTable title={'Medication List'} headers={['Id', 'name', 'dosage', 'prescribed for', 'Entry date']} data={data} searchbar actions={false} />


                    </div>
                </>

            }
        </>

    )
}
export default ViewMedications;