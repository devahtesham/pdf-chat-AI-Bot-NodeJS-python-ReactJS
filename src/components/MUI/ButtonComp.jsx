import { Button } from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";

const ButtonComp = ({name,width,onClick}) => {
    const navigate = useNavigate()
    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{ backgroundColor: '#6870fa', borderColor: '#6870fa', fontSize: '14px', fontWeight: 600, width: width ? width : 'unset' }}
        >
           {name}
        </Button>
    )
}

export default ButtonComp
