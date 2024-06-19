import React from 'react'
import {MyYouTube} from "../../common/common"
import cn from "classnames"
import {Col, Row} from "react-bootstrap"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR11} from "../../common/ImageContexts"

export const NC11 = () => {
  const videoNumber = 11
  const youtubeID = '_T6qzHq5H60'

  const gallery1 = useGallery(DIR11)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Alex vs Elena Vasilyeva (Gladiatriks), Mixed Beach Wrestling. July, 2011</h4>
      <p>
        Alex vs Elena Vasilyeva. Mixed Beach Wrestling. July, 2011<br/>
        This film features two fights for the 3rd place between <b>Elena Vasilyeva</b> (5’6” / 135 lb)
        and <b>Alex</b> (5’9” / 154 lb), which were held as part of a mixed wrestling tournament in St.
        Petersburg, July 2011. Each individual fight had no time limit, according to the tournament rules.<br/>
        The struggle between Elena and Alex proved to be extremely hard and exhausting. Their first fight lasted more
        than 12 minutes.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        If you enjoy sporting mixed wrestling with choke holds, body scissors, and head scissors, then we believe you
        will love our film. Watch to find out who - <b>Elena</b> or <b>Alex</b> - took 3rd place in this mixed
        tournament.
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>
  )
}