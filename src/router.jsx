import { createBrowserRouter } from "react-router";


import Unauth from "@/layouts/Unauth";
import Home from '@/views/Home'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Dashboard from "@/layouts/Dashboard";
import Analytics from "@/views/dashboard/admin/analytics";
import PatientList from "@/views/dashboard/admin/patienList";
import NotFound from "@/views/NotFound";
import PatientProfile from "@/views/dashboard/patient/patientProfile";
import PatientMedications from "@/views/dashboard/patient/PatientMedications";
import PatientResults from "@/views/dashboard/patient/patientResults";
import DoctorsReco from "@/views/dashboard/patient/doctorsReco";
import ViewPatient from "@/views/dashboard/admin/viewPatient";
import ViewMedications from "./views/dashboard/admin/viewMedications";
import RegisterNewPatient from "./views/dashboard/admin/registerPatient";
const router = createBrowserRouter([
    {
        path: "/",
        children: [
            { index: true, Component: Home },

            {
                path: "auth",
                Component: Unauth,
                children: [
                    { path: "login", Component: Login },
                    { path: "register", Component: Register },
                ],
            },
            {
                path: "dashboard",
                Component: Dashboard,
                children: [
                    {
                        path: "admin",

                        children: [
                            { index: true, Component: Analytics },
                            { path: "patient-list", Component: PatientList },
                            { path: "patient/:pid", Component: ViewPatient },
                            { path: "add-patient", Component: RegisterNewPatient },
                            { path: "medications-list", Component: ViewMedications },
                        ],
                    },
                    {
                        path: "patient",

                        children: [
                            { index: true, Component: PatientProfile },
                            { path: "medications", Component: PatientMedications },
                            { path: "results", Component: PatientResults },
                            { path: "recommendations", Component: DoctorsReco },
                        ],
                    },
                ],
            },
            {
                path: "*",
                Component: NotFound
            }

        ],

    },
    {
        path: "*",
        Component: NotFound
    }

]);

export default router