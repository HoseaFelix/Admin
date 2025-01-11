import React from 'react'

import AdminSite from "./components/adminSite.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminHome from "./components/adminHome.jsx";


const App = () => {
    return (

        <main className="relative min-h-screen w-screen overflow-x-hidden bg-black flex items-center justify-center">
            <Router>
                <Routes>
                    <Route path="/" element={<AdminSite/>}/>
                    <Route path="home" element={<AdminHome/>}/>

                </Routes>
            </Router>

        </main>
    )
}
export default App
