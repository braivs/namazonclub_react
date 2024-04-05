import React from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {MyYouTube} from "../../common/common"
import {useGallery} from "../../common/hooks"
import {DIR_NC46} from "../../common/ImageContexts"

export const NC47 = () => {
  const videoNumber = 'NC47'
  const youtubeID = 'lDgKoh-9KG4'

  const gallery1 = useGallery(DIR_NC46)


  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>NC47 Competitions at Maslenitsa 16.02.2017</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
{/*      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={'Screenshots'}
      />*/}
      <Row>
        <hr/>
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc46"> Gumroad </a></p>
      </Row>
    </>
  )
}