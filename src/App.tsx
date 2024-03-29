import React from 'react'
import {Route, Routes} from "react-router-dom"
import './App.scss'
import {Welcome} from "./components/Welcome/Welcome"
import {Universe} from "./components/Universe/Universe"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/universe/*" element={<Universe/>}/>
            </Routes>
        </div>
    )
}

export default App
