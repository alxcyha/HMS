import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Login = React.lazy(()=> import("../LandingPage Admin"));
const HomeAdmin = React.lazy(()=> import("../pages/ADMIN/Home"));
const HomeDR = React.lazy(()=> import("../pages/DOCTOR/HomeDR"));
const Doctors = React.lazy(()=> import("../pages/ADMIN/DR"));
const Patients = React.lazy(()=> import("../pages/ADMIN/PT"));
const Accounts = React.lazy(()=> import("../pages/ADMIN/Accounts"));
// const LoginPT =  React.lazy(()=> import("../pages/LoginPT"));
const LoginDR =  React.lazy(()=> import("../pages/LoginDR"));
const Landing = React.lazy(()=> import("../LandingPage"));
const PTinfo = React.lazy(()=> import("../pages/DOCTOR/PTinfo"));
const Audit = React.lazy(()=> import("../pages/DOCTOR/Audit"));
const Room = React.lazy(()=> import("../pages/DOCTOR/Room"));
export default function AppRoute(){
    return(
        <>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Landing />}/>
                {/* <Route path="/loginPT" element={<LoginPT />}/> */}
                <Route path="/loginDR" element={<LoginDR />}/>
                <Route path="/login" element={<Login />}/>    
                <Route path="/home" element={<HomeAdmin />}/>
                <Route path="/home/PT" element={<Patients />}/>
                <Route path="/home/DR" element={<Doctors />}/>
                <Route path="/home/Accs" element={<Accounts />}/>
                <Route path="/homeDR" element={<HomeDR />}/>
                <Route path="/homeDR/Rooms" element={<Room />}/>
                <Route path="/homeDR/Audit" element={<Audit />}/>
                <Route path="/homeDR/PTi" element={<PTinfo />}/>
             
            </Routes>
            </BrowserRouter>
        </>
    )
}
