import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Login = React.lazy(()=> import("../pages/Login"));
const HomeAdmin = React.lazy(()=> import("../pages/Home"));

export default function AppRoute(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/> 
                <Route path="/home" element={<HomeAdmin />}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}
