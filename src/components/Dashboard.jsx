import React, { useState,useEffect } from 'react'
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import AttachFile from './AttachFile';
import ChatPdf from './ChatPdf';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [isSidebar, setIsSidebar] = useState(true);
    const [isFileAttach, setIsFileAttach] = useState(false);

    const navigate = useNavigate()
    useEffect(()=>{
        let isUserLogin = localStorage.getItem("token")
        if(!isUserLogin){
            navigate("/")
        }
    },[])
    
  return (
    <div className="app">
        <Sidebar isSidebar={isSidebar} current=""/>
        <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/>
            {
                !isFileAttach ? <AttachFile setIsFileAttach={setIsFileAttach}  />: <ChatPdf />
            }   
        </main>
    </div>
  )
}

export default Dashboard