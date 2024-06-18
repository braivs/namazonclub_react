import React from 'react'
import {Col, Row} from "react-bootstrap"
import {MyYouTube} from "../../common/common"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR_NEVSKAYA_ARENA_2} from "../../common/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "../../common/constants"

export const Video21 = () => {
  const videoNumber = 21
  const youtubeID = 'WO77phk8NWk'

  const gallery1 = useGallery(DIR_NEVSKAYA_ARENA_2)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>MMA. Darya Balina vs Olga. July, 2012</h4>
      <p>This is the second MMA fight at the <b>"First Nevsky Arena Tournament"</b>. <b>Darya Balina</b> (5'4" /
        124 lb) and <b>Olga</b> (5'7" / 139 lb) are young participants who don't yet have enough experience in
        MMA fights, but that doesn't diminish the interest or entertainment value of their bout; their punches are
        strong, and the struggle is tough.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>The fighters engage in three full rounds, with neither willing to concede defeat.</p>
      <p>
        If you prefer fights with minimal striking, this match may not fully satisfy you. However, if you appreciate
        genuine, intense, and uncompromising MMA bouts, this fight will surely captivate you.
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
        <p>You can purchase <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
      </Row>
    </>
  )
}