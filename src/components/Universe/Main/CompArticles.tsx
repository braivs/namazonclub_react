import React from 'react'
import {useParams} from "react-router-dom"
import {Maslenitsa2016} from "../../../localdata/compArticles/2015-2017/Maslenitsa2016"
import {Col, Container, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'

export const CompArticles = () => {
    const {compArticle, years} = useParams()

    return (
        <div className={sC.compArticlesVideos}>
            <Container>
                <Row>
                    <Col>
                        {
                            years === '2015-2017' && <>{
                                compArticle === 'maslenitsa-2016' && <>
                              <Maslenitsa2016/>
                            </>
                            }</>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}