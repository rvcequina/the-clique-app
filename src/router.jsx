import { createBrowserRouter } from "react-router";


import Unauth from "@/layouts/Unauth";
import Home from '@/views/Home'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Dashboard from "@/layouts/Dashboard";
import Analytics from "@/views/dashboard/admin/analytics";
import PatientList from "./views/dashboard/admin/patienList";
import NotFound from "@/views/NotFound";
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
                        ],
                    },
                    {
                        path: "patients",

                        children: [
                            { index: true, Component: PatientList },
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