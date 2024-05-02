import React from 'react'
import {Col, Row} from "react-bootstrap"
import {MyYouTube} from "../../common/common"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR_NEVSKAYA_ARENA_1} from "../../common/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "../../common/constants"


export const Video20 = () => {
  const videoNumber = 20
  const youtubeID = 'qo9DmpAXT5w'

  const gallery1 = useGallery(DIR_NEVSKAYA_ARENA_1)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>MMA. Yulia Fedutenko vs Kara Teller. July, 2012</h4>
      <p><b>Yulia Fedutenko</b> (5'8" / 130 lb) - the mixed martial arts Club "Tibron", St. Petersburg. <b>Kara
        Teller</b> (5'7" / 123 lb) - the Vityaz Club, Moscow. This is the first MMA fight at the "<b>First
        Nevsky Arena Tournament</b>". Both girls are well technically skilled. There is everything in this match
        - hard punches and kicks alternate with a close power struggle.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>The girls are fighting three full rounds. Yulia feels more confident in fighting standing up, while Kara
        tries to win the fight on the ground.</p>
      <p>
        If you like hard and uncompromising fights between athletic and attractive women then you will certainly
        like this one.
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <Row>
        <hr/>
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
      </Row>
    </>
  )
}