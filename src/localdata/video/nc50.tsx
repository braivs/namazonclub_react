import React from "react"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"

export const NC50 = () => {
  const videoNumber = 'NC50'
  const youtubeID = 'W8TqBxzEMaI'
  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Tais vs Braivs collection 2014-2017</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        This is a collection of wrestling clips featuring Braivs and Tais, combined into one movie. Filmed over 8 days
        between 2014 and 2017. Braivs did everything he can, but Tais is more stronger. The full clip is 23 minutes
        long.
      </p>
      <Row>
        <hr/>
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc50"> Gumroad </a></p>
      </Row>
    </>
  )
}