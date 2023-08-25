import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Trade from "../scenes/trade"
import Team from "../scenes/team"
import Contacts from "../scenes/contacts"
import Invoices from "../scenes/invoices"
import Form from "../scenes/form"
import { Login,SignUp } from '../components/Auth'
import Dashboard from '../components/Dashboard'
import Particle from '../components/ParticleJS/Particle'
import Splash from '../components/Splash/Splash'
import { useState,useEffect } from 'react'
import PrivateRoutes from '../components/PrivateRoutes/PrivateRoutes'



const Router = () => {
    const [isSplashShow,setIsSplashShow] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setIsSplashShow(false)
        }, 7000);

    },[])
    return (
        <>
            {
                isSplashShow ? <Splash />:
                <>
                    <Particle />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route element={<PrivateRoutes />}>
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Route>
                    </Routes>
                </>
            }
            
            
            

        </>
    )
}

export default Router