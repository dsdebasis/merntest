import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from "./App.jsx"
import EmpProvider from './Admin/ContextProvidr.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <EmpProvider>

        <App />
      </EmpProvider>
    </RouterProvider>
  </React.StrictMode>,
)
