import React from 'react'
import sC from 'src/common/styles.module.scss'
import {MyYouTube} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../common/hooks"
import {DIR37} from "../../common/ImageContexts"

export const Video37 = () => {
  const videoNumber = 37
  const youtubeID = 'oxAzT_GWSJA'

  const gallery1 = useGallery(DIR37)

  return (
    <div className={sC.compArticlesVideoGirl}>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Female submission grappling tournament between beginners. <u>Final fights</u>.<br/>
        Weight class: 145 to 160 lb. May, 2014</h4>
      <p>
        This video is a continuation of the Video 36 that featured the preliminary fights (see its
        description <NavLink to="/universe/video/36">HERE</NavLink>). Now here you can see two final fights in
        which the loser and the winner of the tournament
        were determined.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>In one of them, Nina and Irina fought with each other for the IV place (for not becoming the outsider),
        and in the other Daria and Victoria decided between themselves who was the best wrestler of the
        competition. The fight Nina vs Irina went fast and ended pretty soon – one of the girls defeated the
        other twice by applying submission holds.</p>
      <p>The final fight was much longer and more strenuous. Suffice it to say that in the first round neither
        wrestler was able to gain a victory within the 4 min of time limit.</p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
      />
      <p>We recommend this video for those of you who like real female wrestling and young sexy-looking girls with
        competitive spirit. You will find it especially entertaining if you are interested to see a fight in
        which one of the two girls grappling on the mat continuously struggles to pin her opponent down and
        finally succeeds after long hard attempts.</p>
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </div>

  )
}