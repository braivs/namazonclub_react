import React, {createContext, useEffect, useState} from 'react'
import {Route, Routes} from "react-router-dom"
import './App.scss'
import {Welcome} from "./components/Welcome/Welcome"
import {Universe} from "./components/Universe/Universe"
import {GalleryConfig, galleryConfigs} from "./common/galleryConfigs"
import {useGallery} from "./common/hooks"


function App() {
    const GalleryDataContext = createContext(null);



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
