import React from 'react'
import {Route, Routes} from "react-router-dom"
import './App.scss'
import {Welcome} from "./components/Welcome/Welcome"
import {UniverseEng} from "./components/UniverseEng/UniverseEng"

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/universeeng/*" element={<UniverseEng/>}/>
            </Routes>
        </div>
    )
}

export default App
