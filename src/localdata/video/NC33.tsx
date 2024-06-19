import React, {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {MyYouTube} from "../../common/common"
import {Col, Row} from "react-bootstrap"
import cn from "classnames"
import {DIR_LIDA_VIKA, DIR_TAIS_YULIA} from "../../common/ImageContexts"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

export const NC33 = () => {
    const videoNumber = 33
    const youtubeID = 'UdxhMrIku4A'

    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(DIR_LIDA_VIKA)
    const slides = getSlides(photos)

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(DIR_TAIS_YULIA)
    const slides2 = getSlides(photos2)

    return (
      <>
        <>
          <h3>VIDEO {videoNumber}</h3>
          <h4>Crossfit tournament: Submission grappling. October 2013</h4>
          <p>
            This video features two submission grappling matches held as the final part of a Crossfit tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.<br/>
            The matches were to determine winners in two weight categories: up to 70 kg / 155 lb between <b>Lidia Oslopovskih</b> (53 kg / 117 lb) and <b>Victoria Vardugina</b> (69 kg / 152 lb), and in the absolute category between <b>Yulia Borovik</b> (91 kg / 201 lb) and <b>Tais</b> (61 kg / 135 lb).
          </p>
          <Row>
            <Col className={cn('d-flex', 'justify-content-center')}>
              <MyYouTube videoId={youtubeID}/>
            </Col>
          </Row>
          <p>
            Despite significant weight differences between the opponents in each pair, their struggle on the mat was strenuous, entertaining, and exciting. The girls fought hard and bravely to win this last decisive part of the tournament.
          </p>
          <h5>Lidia Oslopovskih vs Victoria Vardugina</h5>
          <ButtonGallery
            index={index}
            indexCallback={setIndex}
            isOpen={open}
            openCloseCallback={setOpen}
            photos={photos}
            slides={slides}
          />
          <h5>Yulia Borovik vs Tais</h5>
          <ButtonGallery
            index={index2}
            indexCallback={setIndex2}
            isOpen={open2}
            openCloseCallback={setOpen2}
            photos={photos2}
            slides={slides2}
          />
          <hr/>
          <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
        </>

      </>

    )
}