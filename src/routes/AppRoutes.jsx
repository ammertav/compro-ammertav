import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}></Route>
                <Route path="/" element={<Home />} />  
            </Routes>
        </BrowserRouter>
    )
}