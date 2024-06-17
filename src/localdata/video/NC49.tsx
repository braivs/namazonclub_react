import React from "react"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"

export const NC49 = () => {
  const videoNumber = 'NC49'
  const youtubeID = 'LETUteJJ724'
  
  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Braivs vs Alyona collection 2016-2017</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        This is a collection of wrestling clips featuring Braivs and Alyona, combined into one movie. Filmed over 5 days
        between the end of 2016 and the beginning of 2017. The full clip is 56 minutes long! Just so you know, it is
        more
        male-dominative.
      </p>
      <Row>
        <hr/>
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc49"> Gumroad </a></p>
      </Row>
    </>
  )
}