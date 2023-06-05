import React from 'react'
import {useParams} from "react-router-dom"
import {Maslenitsa2016} from "../../../localdata/compArticles/2015-2017/Maslenitsa2016"
import {Row} from "react-bootstrap"

export const CompArticles = () => {
    const {compArticle, years} = useParams()

    return (
        <>
            <Row>
                {
                    years === '2015-2017' && <>{

                        compArticle === 'maslenitsa-2016' && <>
                      <Maslenitsa2016/>
                    </>
                    }</>
                }
            </Row>

        </>
    )
}