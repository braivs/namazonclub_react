import React from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {MyYouTube} from "../../common/common"

export const NC46 = () => {
    const videoNumber = 'NC46'
    const youtubeID = 'lDgKoh-9KG4'

    return (
        <>
            <h3>{videoNumber}</h3>
            <h4>Alena Kurmandi 30.03.2017 - 06.04.2017</h4>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc46"> Gumroad </a></p>
            </Row>
        </>
    )
}