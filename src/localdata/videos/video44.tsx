import React, {useState} from 'react'
import {Col, Row} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import cn from 'classnames'
import s from './video44.module.scss'
import VSmorodina_vs_VVardugina1 from 'src/img/videos/44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from 'src/img/videos/44/2_V.Smorodina_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VVardugina from 'src/img/videos/44/1_O.Grigorenko_vs_V.Vardugina.jpg'
import p2_OGrigorenko_vs_VVardugina from 'src/img/videos/44/2_O.Grigorenko_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VSmorodina from 'src/img/videos/44/1_O.Grigorenko_vs_V.Smorodina.jpg'
import p2_OGrigorenko_vs_VSmorodina from 'src/img/videos/44/2_O.Grigorenko_vs_V.Smorodina.jpg'
import Lightbox from "yet-another-react-lightbox"
import {photosForReactPhotoAlbumFromArray} from "../../common/helpers"
import PhotoAlbum from "react-photo-album"
import {NavLink} from "react-router-dom"

export const Video44 = () => {
    const [index, setIndex] = useState(-1)
    const [index2, setIndex2] = useState(-1)
    const [index3, setIndex3] = useState(-1)

    const photos1 = photosForReactPhotoAlbumFromArray([VSmorodina_vs_VVardugina1, VSmorodina_vs_VVardugina2])
    const photos2 = photosForReactPhotoAlbumFromArray([p1_OGrigorenko_vs_VVardugina, p2_OGrigorenko_vs_VVardugina])
    const photos3 = photosForReactPhotoAlbumFromArray([p1_OGrigorenko_vs_VSmorodina, p2_OGrigorenko_vs_VSmorodina])
    const slides1 = photos1.map(({src}) => ({
        src
    }))
    const slides2 = photos2.map(({src}) => ({
        src
    }))
    const slides3 = photos3.map(({src}) => ({
        src
    }))

    return (
        <div className={cn(sC.compArticlesVideos, s.video44)}>
            <h3>VIDEO 44</h3>
            <h4>The female power competition for the Maslenitsa Festival, 2016. Wrestling</h4>
            <p>You can read the report on the competitions, the main part of which was these fights, <NavLink
                to={'/universe/compArticles/2015-2017/maslenitsa-2016'}>here</NavLink>. There you will
                find a short report on the fights, as well as a lot
                of photos. For extra beauty, we have added a couple of photos from each fight here.
            </p>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>Viktoria Smorodina vs Viktoria Vardugina</Col>
            </Row>
            <Row>
                <PhotoAlbum layout="rows" photos={photos1} onClick={({index}) => setIndex(index)}/>
                <Lightbox
                    styles={{container: {backgroundColor: "rgba(0, 0, 0, .5)"}}}
                    slides={slides1}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </Row>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Vardugina</Col>
            </Row>
            <Row>
                <PhotoAlbum layout="rows" photos={photos2} onClick={({index}) => setIndex2(index)}/>
                <Lightbox
                    styles={{container: {backgroundColor: "rgba(0, 0, 0, .5)"}}}
                    slides={slides2}
                    open={index2 >= 0}
                    index={index2}
                    close={() => setIndex2(-1)}
                />
            </Row>
            <Row>
                <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Smorodina</Col>
            </Row>
            <Row>
                <PhotoAlbum layout="rows" photos={photos3} onClick={({index}) => setIndex3(index)}/>
                <Lightbox
                    styles={{container: {backgroundColor: "rgba(0, 0, 0, .5)"}}}
                    slides={slides3}
                    open={index3 >= 0}
                    index={index3}
                    close={() => setIndex3(-1)}
                />
            </Row>
            <Row>
                <hr/>
                <p>You can buy VIDEO 44 at <a href="https://gumroad.com/namazonclub"> Gumroad </a></p>
            </Row>
        </div>
    )
}