import { createBrowserRouter } from "react-router";


import Unauth from "@/layouts/Unauth";
import Home from '@/views/Home'
import Login from "@/views/Login";
import Register from "./views/Register";
import Admin from "@/layouts/Admin";
import Index from "@/views/dashboard";
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
                Component: Admin,
                children: [
                    { index: true, Component: Index },
                ],
            },

        ],
    },

]);

export default router