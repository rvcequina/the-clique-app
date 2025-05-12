// import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useLocation,useNavigate } from "react-router";

import CardsProfile from "@/components/Cards/CardsProfile"
import CardTable from "@/components/Cards/CardTable";
const ViewPatient = () => {
  const location = useLocation();
  const { patient, medications, results, recommendations } = location.state || {};
   const navigate = useNavigate();


  return (
    <>
      {

        <>
          <div className="flex min-h-[60vh]">

            <div className="w-full bg-white flex flex-col  p-4 z-20 ">
              <div className="flex justify-end">
                <button onClick={() =>  navigate(`/dashboard/admin/patient-list/`)}>
                  <div className="w-8 h-8  hover:text-white hover:bg-sky-300 text-sky-600 bg-white rounded-full flex justify-center items-center">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
              <Tabs defaultValue="profile" className={'w-full'}>
                <TabsList className="flex">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="medication">Medication</TabsTrigger>
                  <TabsTrigger value="results">Results</TabsTrigger>
                  <TabsTrigger value="reco">Doctors Recommendations</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>
                        View/Make changes on client's profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CardsProfile user={patient} />

                    </CardContent>
                    <CardFooter>
                      {/* <Button>Save changes</Button> */}
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="medication">
                  <Card>
                    <CardHeader>
                      <CardTitle>Medications</CardTitle>
                      <CardDescription>
                        Here you could view/add medications
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CardTable title={'Medication History'} headers={['Id', 'Medication name', 'dosage', 'frequency', 'visited Date', 'Actions']} data={medications} daterange />
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Save password</Button> */}
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="results">
                  <Card>
                    <CardHeader>
                      <CardTitle>Results</CardTitle>
                      <CardDescription>
                        Here you could view/add results
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CardTable title={'Laboratory Results'} headers={['Id', 'Laboratory Procedure', 'description', 'result', 'Test Date', 'Actions']} data={results} daterange />
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Save password</Button> */}
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="reco">
                  <Card>
                    <CardHeader>
                      <CardTitle>Doctor's Recommendations</CardTitle>
                      <CardDescription>
                        Here you could view/add doctor's recommendation history
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CardTable title={'Doctors Recommendation'} headers={['Doctor Id', 'Name', 'Recommendation', 'Consult Date', 'Actions']} data={recommendations} daterange />
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Save password</Button> */}
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

          </div>
        </>

      }
    </>

  )
}
export default ViewPatient;