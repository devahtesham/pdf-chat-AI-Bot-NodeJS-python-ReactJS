import React, {useState} from 'react'
import { useNavigate, Link } from "react-router-dom"
import { ButtonComp, InputBox } from '../MUI'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { DocumentHistoryContext } from "../../context/DocumentHistoryContext";



const Login = () => {
    let ctx = useContext(DocumentHistoryContext);
    console.log(ctx.setName);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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

    // to show error
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

    // login handler
    const loginHandler = () => {
        if (!email || !password && password.length < 8) {
            notifyError('Fill all the Details Completely ... ❗')
            return
        } else {  
            // login api
            axios.post('https://coral-app-amavg.ondigitalocean.app/auth/login',
                {
                    
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

                    // save token in local storage
                    localStorage.setItem("token",response.data.AuthToken)

                    notifySuccess('Login Successfully 🔓');
                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 3500);
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
                <div className="col-md-8 col-xl-5">
                    <div className='signup-form'>
                        <div className='mb-4'>
                            <h1 className='py-1'>Welcome back <span className="span-clr-1">!</span></h1>
                            <h6>Please Enter Your Details to Log In</h6>
                        </div>
                        <div className='w-100'>
                            <InputBox label="Email Address" className="w-100" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                            <InputBox label="Password" className="w-100" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                            <div className='mt-3'>
                                <ButtonComp name={"Log In"} width={'100%'} onClick={() => {
                                    loginHandler()
                                }} />
                                <h6 className='text-center mt-4'>Dont't have an account? <span className='cursor-p span-clr-2' onClick={() => navigate("/signup")}>Sign Up for Free</span></h6>
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

export default Login