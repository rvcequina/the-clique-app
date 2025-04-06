import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import router from '@/router'
import App from '@/App'

import '@/css/styles.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import StoreProvider from '@/providers/store/index';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router} >
        <App />
      </RouterProvider>
    </StoreProvider>
  </StrictMode>,
)
