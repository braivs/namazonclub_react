import React from 'react'
import {Route, Routes} from "react-router-dom"
import {Video44} from "./videos/video44"
import {Video42} from "./videos/video42"
import {Video41} from "./videos/video41"
import {Video37} from "./videos/video37"
import {Video36} from "./videos/video36"

export const Videos = () => {
    return (
        <>
            <Routes>
                <Route path="44" element={<Video44/>}></Route>
                <Route path="42" element={<Video42/>}></Route>
                <Route path="41" element={<Video41/>}></Route>
                <Route path="37" element={<Video37/>}></Route>
                <Route path="36" element={<Video36/>}></Route>
            </Routes>
        </>
    )
}