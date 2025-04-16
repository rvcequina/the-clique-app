import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import router from '@/router'
import App from '@/App'

import '@/css/styles.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import StoreProvider from '@/providers/store/index';
import NotificationProvider from './providers/notification';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider>
      <NotificationProvider>
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </NotificationProvider>
    </StoreProvider>
  </StrictMode>,
)
