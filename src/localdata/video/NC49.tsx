import React from "react"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"
import {useExtractVideoID} from "../../common/hooks"

export const NC49 = () => {
  const videoNumber = useExtractVideoID()
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
        This is a collection of wrestling clips featuring Braivs and Alyona, compiled into a single film. Filmed over 5
        days between late 2016 and early 2017. The full clip is 56 minutes long! Please note, it is more male-dominated.
      </p>
      <Row>
        <hr/>
        <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://namazonclub.gumroad.com/l/nc49">Gumroad</a>.
        </p>
      </Row>
    </>

  )
}