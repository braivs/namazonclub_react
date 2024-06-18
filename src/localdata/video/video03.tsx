import React from 'react'

import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {MyYouTube} from "../../common/common"
import {useGallery} from "../../common/hooks"
import {DIR03_3} from "../../common/ImageContexts"

export const Video03 = () => {
  const videoNumber = 3
  const youtubeID = 'sddvDSjafEY'

  const gallery1 = useGallery(DIR03_3) // Natalia Mysik vs Tais

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Beach Wrestling. Mixed Tournament. September, 2010</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        Female wrestlers from Namazon participated in the tournament: <b>Tais</b> (5’7” / 132 lb) and <b>Natalia
        Mysik</b> (5’11” / 154 lb). Their male opponent was Alex (5’9” / 150 lb). Specifically, the three fights between
        Natalia and Tais from <b>VIDEO {videoNumber}</b> are featured in the <b>WRESTLING</b> section of the website,
        showcasing <b>FEMALE WRESTLING</b> matches.
      </p>
      <p>These matches followed <b>SUBMISSION</b> only rules with no specified time limits. This time, Tais wrestled
        against a woman who was not only heavier but also physically stronger. The struggle was intense! Both women
        fought aggressively, vying for advantageous positions and attempting effective pins or submission holds.
        Particularly dramatic were the first two matches, which took place mainly on wet sand, with momentum shifting
        back and forth.</p>
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

//todo: this is not mixed part of tournament, maybe rename