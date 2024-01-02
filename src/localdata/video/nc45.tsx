import React from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {MyYouTube} from "../../common/common"

export const NC45 = () => {
    const videoNumber = 'NC45'
    const youtubeID = 'Ew7fMthTt0Q'

    return (
        <>
            <h3>{videoNumber}</h3>
            <h4>New fight from Namazon archive. Braivs and Alyouna has equal force.</h4>
            <p>
                Braivs and Alyouna has equal force. Full video contain 16 mins of action.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>
                    <MyYouTube videoId={youtubeID}/>
                </Col>
            </Row>
            <Row>
                <hr/>
                <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc45"> Gumroad </a></p>
            </Row>
        </>
    )
}