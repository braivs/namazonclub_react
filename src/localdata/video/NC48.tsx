import React from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {MyYouTube} from "../../common/common"
import {useExtractVideoID} from "../../common/hooks"

export const NC48 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'K_z4YsnNWbs'

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>NC48 - Competitions Spring 2017</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        Women's strength competition at 16.03.2017. Armwrestling & submission/pin grappling. Girls: Grigorenko Oksana
        (Tais), Murtazalieva Kurmandi, Piven Alyona.
      </p>
      <Row>
        <hr/>
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc48"> Gumroad </a></p>
      </Row>
    </>
  )
}