import { useState } from 'react'
import Admin from './Admin/Admin.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Emp from './Employe/Emp.jsx'
import AdminPage from './Admin/AdminPage.jsx'
import Login from './Admin/Login.jsx'
import Logout from './Admin/Logout.jsx'
let routes
routes = createBrowserRouter(

  [
    {
      path: "/register",
      element: <Admin />
    },
    {
      path: "/wellcome",
      element: <AdminPage />
    },
    {
     path:"/makeemploye",
     element:<Emp/>
    },
    {
      path:"/",
      element:<Login/>
    },{
      path:"/logout",
      element:<Logout/>
    }
  ]

)
function App() {


  return (
    <>
      <Admin />
    </>
  )
}

export default App
export { routes }
