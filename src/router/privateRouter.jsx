import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({isAutenticate}) => {
  return (
    <div>
        {
            isAutenticate ? <Outlet/> : <Navigate to={'/login'} />
        }
    </div>
  )
}

export default PrivateRouter;