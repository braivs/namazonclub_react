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
      <h4>Submission Grappling tournament. Part 1. October, 2014</h4>
      <p>Our HD video featuring the submission grappling mini-tournament that was held in 13 Oct 2014, has been
        divided into two parts : <b>VIDEO 41</b> and <b>VIDEO 42</b>. The first part includes four fights of <b>Zoya
          Dorofeeva</b> (56 kg / 123.5 lb), who is a newcomer of our competitions.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>Previous to that, Zoya was involved in Russian hand-to-hand fighting. Now, here, her opponents were two
        girls who had competed with each other in the May 2014 Grappling tournament for beginners – <b>Christina
          Shvets</b> (68.9 kg / 151.9 lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). The rules now
        were the same as then – Pins-and-Submissions, which meant that a wrestler, in order to win an individual
        fight, must either to force her opponent to submit or to hold her in a pin for a count of five.
        Zoya proved to be a brave and tough fighter. In spite of being much outweighed by her opponents, she
        fought stubbornly against them, doing her best not to submit.
        Suffice it to say that in the 1st fight of Zoya vs Christina, neither the 4 minutes of the regular time
        nor the 2 extra minutes could create a winner. Only in their 2nd fight, after a hard struggle Zoya found
        herself on her back and Christina earned a pinfall win over her.</p>
      <h5>Christina Shvets vs Zoya Dorofeeva</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <p>As for Victoria, she appeared to be an even more difficult opponent for Zoya. She defeated her twice in
        their fights, both times with a choke hold. However, Zoya had a few good chances to defeat Vika not only
        in their first fight but also in their second one. Unfortunately for Zoya, due to her inexperience in
        such competitions, she wasn’t able to materialize any of those chances.</p>
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
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
      </Row>
    </>
  )
}