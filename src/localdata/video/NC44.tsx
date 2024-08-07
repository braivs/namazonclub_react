import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import VSmorodina_vs_VVardugina1 from 'src/img/video/44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from 'src/img/video/44/2_V.Smorodina_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VVardugina from 'src/img/video/44/1_O.Grigorenko_vs_V.Vardugina.jpg'
import p2_OGrigorenko_vs_VVardugina from 'src/img/video/44/2_O.Grigorenko_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VSmorodina from 'src/img/video/44/1_O.Grigorenko_vs_V.Smorodina.jpg'
import p2_OGrigorenko_vs_VSmorodina from 'src/img/video/44/2_O.Grigorenko_vs_V.Smorodina.jpg'
import {getGalleryPhotosFromRequireFromArray, getSlides} from "../../common/helpers"
import {NavLink} from "react-router-dom"
import {LightboxMy, PhotoAlbumMy} from "../../common/ModdedComponents/ModdedComponents"
import {MyYouTube} from "../../common/common"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

export const NC44 = () => {
  const youtubeID = 'bc9RU5hP4k4'

  const videoID = useExtractVideoID()

  const [index, setIndex] = useState(-1)
  const photos1 = getGalleryPhotosFromRequireFromArray([VSmorodina_vs_VVardugina1, VSmorodina_vs_VVardugina2])
  const slides1 = getSlides(photos1)

  const [index2, setIndex2] = useState(-1)
  const photos2 = getGalleryPhotosFromRequireFromArray([p1_OGrigorenko_vs_VVardugina, p2_OGrigorenko_vs_VVardugina])
  const slides2 = getSlides(photos2)

  const [index3, setIndex3] = useState(-1)
  const photos3 = getGalleryPhotosFromRequireFromArray([p1_OGrigorenko_vs_VSmorodina, p2_OGrigorenko_vs_VSmorodina])
  const slides3 = getSlides(photos3)

  return (
    <>
      <h3>{videoID}</h3>
      <h4>The Female Power Competition for the Maslenitsa Festival, 2016. Wrestling</h4>
      <p>You can read the report on the competitions, the main part of which was these fights, <NavLink
        to={'/competition/2015-2017/maslenitsa-2016'}>here</NavLink>. There you will find a short report on
        the fights, as well as many photos. For extra beauty, we have added a couple of photos from each fight here.
      </p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>Viktoria Smorodina vs Viktoria Vardugina</Col>
      </Row>
      <Row>
        <PhotoAlbumMy photos={photos1} openCallback={setIndex} layout={"rows"}/>
        <LightboxMy slides={slides1} index={index} closeCallback={setIndex}/>
      </Row>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Vardugina</Col>
      </Row>
      <Row>
        <PhotoAlbumMy photos={photos2} openCallback={setIndex2} layout={"rows"}/>
        <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2}/>
      </Row>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Smorodina</Col>
      </Row>
      <Row>
        <PhotoAlbumMy photos={photos3} openCallback={setIndex3} layout={"rows"}/>
        <LightboxMy slides={slides3} index={index3} closeCallback={setIndex3}/>
      </Row>
      <Row>
        <hr/>
        <p>You can buy VIDEO {videoID} at <a href={LINK_SHOP_MAIN}>Patreon</a></p>
      </Row>
    </>
  )
}