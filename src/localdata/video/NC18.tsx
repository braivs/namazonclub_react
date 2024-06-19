import React from 'react'
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR_MMA_SPORT_HOLIDAY_1, DIR_MMA_SPORT_HOLIDAY_2} from "../../common/ImageContexts"

export const NC18 = () => {
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
        newcomer <b>Darya Balina</b> (St. Petersburg, 5’4” / 124 lb). Almost the entire fight is contested standing up,
        where Kara clearly dominates. Despite this, Darya proves to be very strong and holds her own for nearly two
        rounds.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>The second fight (Kara Teller vs Tais), unlike the first, primarily takes place on the mat. Over two rounds,
        Tais strives to secure victory with a chokehold or submission lock, occasionally enduring strikes from her
        opponent. The final outcome is quite surprising.</p>
      <h5><u>MMA:</u> Darya Balina vs Kara Teller</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <h5><u>MMA:</u> Kara Teller vs Tais</h5>
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