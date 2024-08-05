import React from 'react'
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID, useGallery} from "../../common/hooks"
import {DIR03_1, DIR03_2} from "../../common/ImageContexts"
import {LINK_SHOP_MAIN} from "../../common/constants/shopLinks"

export const NC03wm = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'sddvDSjafEY'

  const gallery1 = useGallery(DIR03_1) // Natalia Mysik  vs  Alex
  const gallery2 = useGallery(DIR03_2) // Alex  vs  Tais

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Beach Wrestling. Mixed Tournament. Two girls vs one man. September, 2010</h4>
      <p>
        <b>Alex</b> came to St. Petersburg at the weekend and offered Tais (5'7" / 132 lb) and <b>Natalia
        Mysik</b> (5'11" / 154 lb) to hold a mixed tournament on beach wrestling. He had been practicing
        wrestling a lot recently, and had become physically stronger - 5'9" / 150 lb, which allowed him to count
        on a successful performance.
      </p>
      <p>The mixed beach tournament went in three rounds. The fights between the girls were hard enough,
        especially in the first two rounds. The mixed contests started with Alex’s convincing win over Natalia .
        Then the luck turned away from Alex ...</p>
      <p>If you like <b>mixed competitive wrestling</b>, then we believe you will love our film. Watch how
        everything was!</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <h5>Natalia Mysik vs Alex </h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <h5>Alex vs Tais</h5>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href={LINK_SHOP_MAIN}>Patreon</a>.</p>
    </>
  )
}