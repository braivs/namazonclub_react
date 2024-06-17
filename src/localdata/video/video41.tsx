import React from 'react'
import {Col, Row} from "react-bootstrap"
import {MyYouTube} from "../../common/common"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR41_KZ, DIR41_VZ} from "../../common/ImageContexts"

export const Video41 = () => {
  const gallery1 = useGallery(DIR41_KZ)
  const gallery2 = useGallery(DIR41_VZ)

  const videoNumber = 41
  const youtubeID = 'vE6uc_UXaWc'

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Submission grappling tournament. Part 1. October 2014</h4>
      <p>Our HD video featuring the submission grappling mini-tournament that was held on October 13, 2014, has been
        divided into two parts: <b>VIDEO 41</b> and <b>VIDEO 42</b>. The first part includes four fights featuring <b>Zoya
          Dorofeeva</b> (56 kg / 123.5 lb), who is a newcomer to our competitions.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>Prior to this event, Zoya participated in Russian hand-to-hand fighting. Here, her opponents were two
        competitors who previously faced off in the May 2014 Grappling tournament for beginners – <b>Christina
          Shvets</b> (68.9 kg / 151.9 lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). The rules remained
        the same – pins-and-submissions, requiring a wrestler to either force her opponent to submit or hold her
        in a pin for a count of five to win an individual fight.
        Zoya proved to be a brave and resilient fighter. Despite being outweighed by her opponents, she
        fought tenaciously, avoiding submissions.</p>
      <p>In the first fight between Zoya and Christina, neither the 4 minutes of regular time nor the 2 extra minutes
        produced a winner. Only in their second encounter did Christina manage to secure a pinfall victory after a
        hard-fought struggle.</p>
      <h5>Christina Shvets vs Zoya Dorofeeva</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <p>Victoria proved to be an even more formidable opponent for Zoya, defeating her twice with chokeholds. Despite
        this, Zoya had several opportunities to defeat Victoria in both their first and second fights. Unfortunately,
        due to her lack of experience in such competitions, she was unable to capitalize on those chances.</p>
      <h5>Victoria Vardugina vs Zoya Dorofeeva</h5>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
      />
      <Row>
        <hr/>
        <p>You can purchase <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub">Gumroad</a></p>
      </Row>
    </>
  )
}