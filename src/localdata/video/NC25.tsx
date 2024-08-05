import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {useExtractVideoID} from "../../common/hooks"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

const images = require.context('src/img/video/25/villian-elena', false)
const images2 = require.context('src/img/video/25/villian-lyudmila', false)
const images3 = require.context('src/img/video/25/villian-tais', false)

export const NC25 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = '29EMwdnOvJk'

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)

  const [open2, setOpen2] = useState(false)
  const [index2, setIndex2] = useState(-1)
  const photos2 = getGalleryPhotosFromRequire(images2)
  const slides2 = getSlides(photos2)

  const [open3, setOpen3] = useState(false)
  const [index3, setIndex3] = useState(-1)
  const photos3 = getGalleryPhotosFromRequire(images3)
  const slides3 = getSlides(photos3)

  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Mixed Wrestling - the Best Fights. Part 2. 2011</h4>
      <p>
        This is the second video of the series titled "<b>Mixed wrestling - the best fights</b>". Here you can
        see <b>Villian</b> (5'7" / 177 lb) wrestle three strong female fighters: <b>Tais</b> (5'7" / 130
        lb), <b>Elena Vasilyeva</b> (5'6" / 135 lb), and <b>Lyudmila</b> (5'11" / 154 lb).<br/>
        Each of these ladies presents a unique challenge: tall blonde Lyudmila, a newcomer in competitions, is engaged
        in Muay Thai; strong and ambitious Elena competes successfully in arm wrestling, submission grappling, and MMA;
        and Tais, the strongest and most experienced fighter among them.
      </p>
      <p>This video features five submission grappling fights (Tais and Elena wrestled Villian twice). The fights
        take place both in a gym on a mat and outdoors on a sandy beach and on grass. If you like mixed
        wrestling, then don’t miss this video.</p>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>If you enjoy mixed wrestling, then this video is a must-watch.</p>
      <h5>Villian vs Elena Vasilyeva</h5>
      <ButtonGallery
        buttonName={'SCREENSHOTS'}
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
      />
      <h5>Villian vs Lyudmila</h5>
      <ButtonGallery
        buttonName={'SCREENSHOTS'}
        index={index2}
        indexCallback={setIndex2}
        isOpen={open2}
        openCloseCallback={setOpen2}
        photos={photos2}
        slides={slides2}
      />
      <h5>Villian vs Tais</h5>
      <ButtonGallery
        buttonName={'SCREENSHOTS'}
        index={index3}
        indexCallback={setIndex3}
        isOpen={open3}
        openCloseCallback={setOpen3}
        photos={photos3}
        slides={slides3}
      />
      <hr/>
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href={LINK_SHOP_MAIN}>Patreon</a>.</p>
    </>

  )
}

//todo: change main image to multiple, because many fights inside. And look for same in another videos.