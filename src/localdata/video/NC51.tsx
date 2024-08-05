import React from "react"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"
import {useExtractVideoID} from "../../common/hooks"

export const NC51 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'zvHDGMyqyXc'
  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Kara, Darya, Tais. 08.05.2012</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        This is a short video, but the price for the full version is not high. You can enjoy it)
        Featured: Tais, Kara Teller, Darya Balina.
      </p>
      <Row>
        <hr/>
        <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://namazonclub.gumroad.com/l/nc51">Patreon</a>.
        </p>
      </Row>
    </>

  )
}