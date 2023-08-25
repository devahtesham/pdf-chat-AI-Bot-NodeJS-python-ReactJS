import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { ButtonComp, InputBox } from '../MUI'
import { ToastContainer, toast } from 'react-toastify';
import "./SignUp.css"
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { DocumentHistoryContext } from '../../context/DocumentHistoryContext';



const SignUp = () => {

    let ctx = useContext(DocumentHistoryContext);
    console.log(ctx.email);

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // for notification
    const navigate = useNavigate()
    // checking user status
    useEffect(()=>{
        let isUserLogin = localStorage.getItem("token")
        if(isUserLogin){
            navigate("/dashboard")
        }
    },[])

    // to show success
    const notifySuccess = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notifyError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    // signup handler

    const signupHandler = () => {
        if (!fullName || !email || !password && password.length < 8) {
            notifyError('Fill all the Details Completely ... ❗')
            return
        } else {
            
            // signup api
            axios.post('https://coral-app-amavg.ondigitalocean.app/auth/register',
                {
                    'FullName': fullName,
                    'Email': email,
                    'Password': password
                },
                {
                    headers: {
                        'accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then((response) => {
                    console.log(response);
                    notifySuccess('Account Created Successfully 🎉');
                    setTimeout(() => {
                        navigate("/")
                    }, 3500);
                    setFullName("");
                    setEmail("")
                    setPassword("")
                })
                .catch((err) => {
                    notifyError(err.response.data.message)
                })
        }
    }



    return (
        <div className="container h-100 d-flex align-items-center justify-content-start   ">
            <div className="row w-100 ">
                <div className="col-md-8 col-xl-5 ">
                    <div className='signup-form'>
                        <div className='mb-4'>
                            <h5>START FOR FREE</h5>
                            <h1 className='py-1'>Create <span className="span-clr-1">new</span> account</h1>
                            <h6>Already A Member? <span className='span-clr-2 cursor-p' onClick={() => navigate("/")}>Log In</span></h6>
                        </div>
                        <div className='w-100'>
                            <InputBox label="Full Name" className="w-100" type="text" onChange={(e) => { setFullName(e.target.value) }} />
                            <InputBox label="Email Address" className="w-100" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                            <InputBox label="Password" className="w-100" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                            <div className='mt-3'>
                                <ButtonComp name={"Create account"} width={'100%'} onClick={() => {
                                    signupHandler()
                                }} />
                            </div>
                            {/* displaying notification popup */}
                            <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp