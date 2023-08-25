import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

function InputBox(props) {
    const {label,className,type} = props
    const theme = useTheme();
  return (
    <Box
      component=""
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  id={`outlined-${label}`} label={label} variant="outlined" color='secondary' className={`${className} inputField`} type={type} sx={{fontSize:'30px'}}
        onChange={props.onChange} autoComplete='off'
      />
    </Box>
  );
}

export default InputBox