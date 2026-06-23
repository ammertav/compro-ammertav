import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import AmbientBackground from "../components/background/AmbientBackground";

export default function MainLayout(){
    return(
        <>
            <AmbientBackground/>
            <Navbar/>
            <main>
                <Suspense fallback={<div className="min-h-screen bg-ink" />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer/>
        </>
    );
};