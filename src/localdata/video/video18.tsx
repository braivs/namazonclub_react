import React from 'react'
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR_MMA_SPORT_HOLIDAY_1, DIR_MMA_SPORT_HOLIDAY_2} from "../../common/ImageContexts"

export const Video18 = () => {
  const videoNumber = 18
  const youtubeID = 'fYEVVlzkUsA'

  const gallery1 = useGallery(DIR_MMA_SPORT_HOLIDAY_1)
  const gallery2 = useGallery(DIR_MMA_SPORT_HOLIDAY_2)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>MMA. Kara Teller vs Darya Balina and Tais. May, 2012</h4>
      <p>
        The first match is between the experienced fighter <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) and the
        newcomer <b>Darya Balina</b> (St. Petersburg, 5’4” / 124 lb). Almost the whole fight is fought standing
        up where Kara clearly dominates. Darya turns out to be very strong and holds out for nearly two rounds.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>The second fight (Kara Teller vs Tais), unlike the first one, consists of mainly mat wrestling. For two
        rounds Tais struggles to win the fight with a chokehold or submission lock, occasionally taking hits
        from her opponent. The final result is quite surprising.</p>
      <h5><u>ММА</u> Darya Balina vs Kara Teller</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <h5><u>ММА</u> Kara Teller vs Tais</h5>
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