import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const islogin = localStorage.getItem("token")
  return (
    <>
        {
            islogin ? <Outlet /> : ""
        }
    </>
  )
}

export default PrivateRoutes