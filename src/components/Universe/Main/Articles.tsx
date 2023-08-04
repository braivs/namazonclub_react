import React from 'react'
import {Submission} from "src/localdata/articles/Submission"
import {Mix} from "../../../localdata/articles/Mix"
import {MMA} from "../../../localdata/articles/MMA"
import {useParams} from "react-router-dom"

export const Articles = () => {
    const {article} = useParams()

    return (
        <>
            {article === 'submission' && <Submission />}
            {article === 'mix' && <Mix />}
            {article === 'mma' && <MMA /> }
        </>
    )
}