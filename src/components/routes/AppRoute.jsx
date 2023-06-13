import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeAdmin from "../pages/Home";
import Login from "../pages/Login";

export default function AppRoute(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/home" element={<HomeAdmin />}> </Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}
