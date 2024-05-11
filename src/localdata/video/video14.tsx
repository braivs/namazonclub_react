import React from 'react'
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR14_1, DIR14_2} from "../../common/ImageContexts"

export const Video14 = () => {
  const videoNumber = 14
  const youtubeID1 = 'mXLIzt6ZBFk'
  const youtubeID2 = 'dQjBmmyLnC0'

  const gallery1 = useGallery(DIR14_1)
  const gallery2 = useGallery(DIR14_2)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Two men against one woman. Mixed wrestling on a beach. Part 1. 2011</h4>
      <p>
        Two men against one woman. Mixed wrestling. Part 1. 2011<br/>
        This video features a short improvised mixed wrestling tournament that was held on one of the beaches of
        St. Petersburg. The men were represented by <b>Alex</b> (5’9” / 154 lb) and <b>Villian</b> (5'8” / 177
        lb). The female fighter was <b>Tais</b> (5’7” / 130 lb), the strongest girl of the Namazon Club. The
        competition was organized in two rounds.<br/>
        In the 1st part of the video series you will be able to see two short male and four mixed fights.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID1}/>
        </Col>
      </Row>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID2}/>
        </Col>
      </Row>
      <p>
        If you like sporting mixed wrestling (in a submission grappling style) on a beach, then you will have to
        love our film. Purchase it if you want to see mixed fights with a strong and skilled female wrestler!
      </p>
      <h5>Tais vs Alex</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <h5>Tais vs Villian</h5>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>
  )
}