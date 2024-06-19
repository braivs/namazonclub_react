import React from 'react'
import {Col, Row} from "react-bootstrap"
import {MyYouTube} from "../../common/common"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR_NEVSKAYA_ARENA_1} from "../../common/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "../../common/constants"


export const NC20 = () => {
  const videoNumber = 20
  const youtubeID = 'qo9DmpAXT5w'

  const gallery1 = useGallery(DIR_NEVSKAYA_ARENA_1)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>MMA. Yulia Fedutenko vs Kara Teller. July, 2012</h4>
      <p><b>Yulia Fedutenko</b> (5'8" / 130 lb) - from the mixed martial arts Club "Tibron" in St. Petersburg. <b>Kara
        Teller</b> (5'7" / 123 lb) - representing the Vityaz Club in Moscow. This bout took place at the "<b>First
        Nevsky Arena Tournament</b>". Both fighters are technically skilled, showcasing a blend of hard punches, kicks,
        and close-quarter power struggles.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>The match extends over three full rounds. Yulia demonstrates more confidence in stand-up fighting, while Kara
        focuses on ground techniques to secure victory.</p>
      <p>If you enjoy intense and uncompromising fights between athletic and charismatic women, this bout is sure to
        captivate you.</p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <hr/>
      <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>

  )
}