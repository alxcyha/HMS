import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ButtonBases from './landingButtons';
import Copyright from './ui/Copyright';
import { Icon } from '@mui/material';
import logo from '../assets/Healthcare-Hospital.png';

console.log(logo);
export default function Landing() {
    
  return (
    <Box>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar >
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> <img src={logo} alt="Logo" style={{height:'35px', paddingRight:'5px'}}/>
                    Hospital Management System
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        <Box>
            <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/blur-hospital-clinic-interior_1203-8606.jpg')",backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover',width: '100vw',
            height: '100vh'}}>
    
                <div style={{paddingTop:'14%', paddingBottom:'2%'}}>
                    <h1 style={{fontSize:"60px", textAlign:"center",fontWeight: 1000, color: '#073b87'}}>
                    Welcome to our <br></br> Hospital Management System!
                    </h1>
                </div>
                <div style={{paddingTop:'2%', PaddingBottom:'2%'}}>
                    <h1 style={{textAlign:"center",fontWeight: 1000, color: '#073b87'}}>I'M A</h1>
                    <div style={{padding:'1%',marginRight:'0.5%',marginLeft:'0.5%'}}><ButtonBases /></div>
                    
                </div>
                <div style={{paddingTop:'13%'}}>
                    <Copyright />
                </div>

            </div>
            
        </Box>

    </Box>
  
  );
}