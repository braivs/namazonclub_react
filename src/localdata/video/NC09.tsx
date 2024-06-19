import React from 'react'
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR09_1, DIR09_2, DIR09_3} from "../../common/ImageContexts"

export const NC09 = () => {
  const gallery1 = useGallery(DIR09_1)
  const gallery2 = useGallery(DIR09_2)
  const gallery3 = useGallery(DIR09_3)
  const buttonText = 'See photos'

  const videoNumber = 9
  const youtubeID = '8NnbhTgPKXE'

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>MMA tournament "Christmas Cup 2012"</h4>
      <p>
        Three fighters participated in this tournament: <b>Elena Vasilyeva</b> (St. Petersburg, 5’6” / 132 lb),
        <b>Kara Teller</b>, a newcomer from Namazon Club (Moscow, 5’7” / 119 lb), and <b>Tais</b> (St. Petersburg,
        5’7” / 130 lb). The tournament was conducted in a single round format, with each fighter having two matches.
        Each match consisted of three 4-minute rounds with a 1-minute rest period between rounds.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>The fighters competed fiercely and uncompromisingly in all three matches.</p>
      <p>If you enjoy competitive fights involving strikes with arms and legs, as well as wrestling with armlocks and
        chokes, then you will definitely enjoy our film.</p>
      <h5><u>First fight:</u> Elena Vasilyeva vs Kara Teller</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={buttonText}
      />
      <h5><u>Second fight:</u> Kara Teller vs Tais</h5>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
        buttonName={buttonText}
      />
      <h5><u>Third fight:</u> Elena Vasilyeva vs Tais</h5>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
        buttonName={buttonText}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>

  )
}