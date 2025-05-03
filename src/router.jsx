import { createBrowserRouter } from "react-router";


import Unauth from "@/layouts/Unauth";
import Home from '@/views/Home'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Dashboard from "@/layouts/Dashboard";
import Analytics from "@/views/dashboard/admin/analytics";
import PatientList from "./views/dashboard/admin/patienList";
import NotFound from "@/views/NotFound";
import PatientProfile from "./views/dashboard/patient/patientProfile";
import Medicatons from "./views/dashboard/patient/medications";
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
                            { path: "patient-list", Component: PatientList }
                        ],
                    },
                    {
                        path: "patient",

                        children: [
                            { index: true, Component: PatientProfile },
                            { path: "medications", Component: Medicatons },
                            { path: "results", Component: PatientList },
                            { path: "recommendations", Component: PatientList },
                        ],
                    },
                ],
            },

        ],

    },
    {
        path: "*",
        Component: NotFound
    }

]);

export default router