import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Login = React.lazy(()=> import("../pages/Login"));
const HomeAdmin = React.lazy(()=> import("../pages/Home"));
const HomeDR = React.lazy(()=> import("../pages/HomeDR"));
const Doctors = React.lazy(()=> import("../pages/DR"));
const Patients = React.lazy(()=> import("../pages/PT"));
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
            </Routes>
            </BrowserRouter>
        </>
    )
}
