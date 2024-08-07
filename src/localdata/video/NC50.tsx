import React from "react"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"
import {useExtractVideoID} from "../../common/hooks"
import {LINKS_NC_CLIPS} from "../../common/constants/shopLinks"

export const NC50 = () => {
  const videoNumber = useExtractVideoID()
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
        This is a collection of wrestling clips featuring Braivs and Tais, compiled into a single film. Filmed over 8
        days between 2014 and 2017, Braivs put forth his best effort, but Tais proved to be stronger. The full clip is
        23 minutes long.
      </p>
      <Row>
        <hr/>
        <p>You can purchase <b>VIDEO {videoNumber}</b> on {videoNumber && <a href={LINKS_NC_CLIPS[videoNumber]}>Patreon</a>} .
        </p>
      </Row>
    </>

  )
}