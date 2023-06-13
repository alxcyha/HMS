import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Login = React.lazy(()=> import("../pages/Login"));
const HomeAdmin = React.lazy(()=> import("../pages/Home"));
const HomeDR = React.lazy(()=> import("../pages/HomeDR"));
const Doctors = React.lazy(()=> import("../pages/DR"));
const Patients = React.lazy(()=> import("../pages/PT"));
const HomePT = React.lazy(()=> import("../pages/HomePT"));
const ProfileDR = React.lazy(()=> import("../pages/DRprofile"));
const ProfilePT = React.lazy(()=> import("../pages/PTprofile"));
export default function AppRoute(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/> 
                <Route path="/home" element={<HomeAdmin />}/>
                <Route path="/home/PT" element={<Patients />}/>
                <Route path="/home/DR" element={<Doctors />}/>
                <Route path="/homeDR" element={<HomeDR />}/>
                <Route path="/homeDR/ProfileDR" element={<ProfileDR />}/>
                <Route path="/homePT" element={<HomePT />}/>
                <Route path="/homePT/ProfilePT" element={<ProfilePT />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}
