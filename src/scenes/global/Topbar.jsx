import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useNavigate } from "react-router-dom";
import { ButtonComp } from "../../components/MUI";
import { ToastContainer, toast } from 'react-toastify';


const Topbar = () => {
    const navigate = useNavigate()   // to navigate on to some page 
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    // for notification
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

    // logout
    const logoutHandler = () => {
        localStorage.removeItem("token");
        notifySuccess('Logout Successfully 🔒')
        setTimeout(() => {
            navigate("/")
        }, 3500);
    }

    return (
        <Box p={2}
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            {/* ICONS */}
            <Box >
                <ButtonComp name="LOG OUT" onClick={() => {
                    logoutHandler()
                }} />
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
            </Box>
        </Box>
    );
};

export default Topbar;
