import React from 'react'
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import {MyYouTube} from "../../common/common"
import {useExtractVideoID, useGallery} from "../../common/hooks"
import {DIR_NC47} from "../../common/ImageContexts"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

export const NC47 = () => {
  const videoNumber = useExtractVideoID()
  const youtubeID = 'fb5NUMSB2qg'

  const gallery1 = useGallery(DIR_NC47)


  return (
    <>
      <h3>{videoNumber}</h3>
      <h4>Women's strength competition at Maslenitsa 2017</h4>
      <Row>
        <Col className={cn('d-flex', 'justify-content-center')}>
          <MyYouTube videoId={youtubeID}/>
        </Col>
      </Row>
      <p>
        Women's strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling. Girls: Vardugina
        Viktoria, Vasilyeva Elena, Grigorenko Oksana (Tais), Piven Alyona.
        Grigorenko Oksana & Piven Alyona represented Namazon club. Vasilyeva Elena took part only in armwrestling.
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={'Screenshots'}
      />
      <Row>
        <hr/>
        <p>You can buy <b>VIDEO {videoNumber}</b> at <a href="https://namazonclub.gumroad.com/l/nc47"> Gumroad </a></p>
      </Row>
    </>
  )
}