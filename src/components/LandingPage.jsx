import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginDoctor from './pages/LoginDR';
import logo from '../assets/bg.png';


const defaultTheme = createTheme();

export default function SignInSide() {

  return (
    <ThemeProvider theme={defaultTheme} >
      
      <Grid container display='flex' component="main" sx={{ height: '100vh', backgroundImage: "url('https://t4.ftcdn.net/jpg/01/33/33/41/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg')",
            backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
        <CssBaseline />
        <Grid container flexWrap='wrap'direction="row" justifyContent="center"  alignItems="center">
          <Grid flexGrow={0} item xs={14} sm={10} md={5} lg={5}>
            <img src={logo} alt="Logo" style={{height:'35vh'}}/>
          </Grid>
          <Grid  flexGrow={7} pt={20} item xs={14} sm={9} md={6} lg={5}>
            <LoginDoctor/>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}