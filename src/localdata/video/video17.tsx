import React from 'react'
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR17_1, DIR17_2, DIR17_3} from "../../common/ImageContexts"

export const Video17 = () => {
  const videoNumber = 17
  const youtubeID = '93iT7iBJVik'

  const gallery1 = useGallery(DIR17_1)
  const gallery2 = useGallery(DIR17_2)
  const gallery3 = useGallery(DIR17_3)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>MMA and Submission Grappling. February, 2012</h4>
      <p>
        Our video features two ММА fights: <b>Kara Teller</b> (Moscow, 5’7” / 123 lb) vs <b>Tais</b> (St.
        Petersburg, 5’7” / 130 lb) and <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) vs <b>Svetlana
        Solovyeva</b> (St. Petersburg, 5’7” / 123 lb). Kara and Tais could be seen in our previous film (Video
        9), while for Svetlana it was the first MMA fight.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>In the second part of the movie you will be able to see a very tough submission grappling fight between
        Kara and Svetlana Solovyova. Sveta had surpassed her opponent in strength at the time, while Kara in
        this pair had been more experienced and technically skilled. .</p>
      <p>To find out who won, you will have to watch our film.</p>
      <h5><u>MMA</u> Svetlana Solovyeva vs Kara Teller</h5>
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
      <h5><u>Submission Grappling</u> Svetlana Solovyeva vs Kara Teller</h5>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>
  )
}