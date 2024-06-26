import React from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {MyYouTube} from "../../common/common"
import {useExtractVideoID} from "../../common/hooks"

export const NC45 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'Ew7fMthTt0Q'

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Braivs vs Alyona. Mixed wrestling. 13.10.2016</h4>
      <p>
        Braivs and Alyona are evenly matched in strength. The full video contains 15 minutes of action.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <Row>
        <hr/>
        <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://namazonclub.gumroad.com/l/nc45">Gumroad</a>.
        </p>
      </Row>
    </>

  )
}