import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Login = React.lazy(()=> import("../pages/OldLogin"));
const HomeAdmin = React.lazy(()=> import("../pages/ADMIN/Home"));
const HomeDR = React.lazy(()=> import("../pages/DOCTOR/HomeDR"));
const Doctors = React.lazy(()=> import("../pages/ADMIN/DR"));
const Patients = React.lazy(()=> import("../pages/ADMIN/PT"));
const HomePT = React.lazy(()=> import("../pages/PATIENT/HomePT"));
const ProfileDR = React.lazy(()=> import("../pages/DOCTOR/DRprofile"));
const ProfilePT = React.lazy(()=> import("../pages/PATIENT/PTprofile"));
const Accounts = React.lazy(()=> import("../pages/ADMIN/Accounts"));
const LoginPT =  React.lazy(()=> import("../pages/LoginPT"));
const LoginDR =  React.lazy(()=> import("../pages/LoginDR"));
export default function AppRoute(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPT />}/>
                <Route path="/loginDR" element={<LoginDR />}/>
                <Route path="/login" element={<Login />}/>    
                <Route path="/home" element={<HomeAdmin />}/>
                <Route path="/home/PT" element={<Patients />}/>
                <Route path="/home/DR" element={<Doctors />}/>
                <Route path="/home/Accs" element={<Accounts />}/>
                <Route path="/homeDR" element={<HomeDR />}/>
                <Route path="/homeDR/ProfileDR" element={<ProfileDR />}/>
                <Route path="/homePT" element={<HomePT />}/>
                <Route path="/homePT/ProfilePT" element={<ProfilePT />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}
