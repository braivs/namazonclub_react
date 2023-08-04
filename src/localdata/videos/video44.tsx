import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import s from './video44.module.scss'
import VSmorodina_vs_VVardugina1 from 'src/img/videos/44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from 'src/img/videos/44/2_V.Smorodina_vs_V.Vardugina.jpg'
import Lightbox from "yet-another-react-lightbox"
import {getGalleryPhotoesFromRequire, getGalleryPhotosFromArray} from "../../common/helpers"
import {Gallery} from "react-grid-gallery"

export const Video44 = () => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const handleClick = (index: number) => setIndex(index)

    const photos1 = getGalleryPhotosFromArray([VSmorodina_vs_VVardugina1, VSmorodina_vs_VVardugina2])
    const slides1 = photos1.map(({original}) => ({
        src: original
    }))

    return (
        <div className={cn(sC.compArticlesVideos, s.video44)}>
            <h3>VIDEO 44</h3>
            <h4>The female power competition for the Maslenitsa Festival, 2016. Wrestling</h4>
            <p>You can read the report on the competitions, the main part of which was these fights, !!!ADD LINK to
                maslenitsa-2016Eng article!!! here. There you will find a short report on the fights, as well as a lot
                of photos. For extra beauty, we have added a couple of photos from each fight here. </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>Viktoria Smorodina vs Viktoria Vardugina</Col>
            </Row>
            <Row>
                <Gallery images={photos1} enableImageSelection={false} onClick={handleClick}/>
                <Lightbox
                    slides={slides1}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </Row>
        </div>
    )
}