import React from 'react'
import {CardComponent} from "./CardComponent/CardComponent"
import power2016 from 'src/img/video/wrestThumb/2016-power competition on Shrove Tuesday.jpg'
import video42 from 'src/img/video/wrestThumb/video-42.jpg'
import video41 from 'src/img/video/wrestThumb/video-41.jpg'
import video37 from 'src/img/video/wrestThumb/video-37.jpg'
import video36 from 'src/img/video/wrestThumb/video-36.jpg'
import {Row} from "react-bootstrap"
import s from './CardsWrestling.module.scss'

export const CardsWrestling = () => {
    return (
        <div>
            <Row className={s.cardRow}>
                <CardComponent
                    title={<>VIDEO 44<br/>The Maslenitsa Festival, 2016<br/>Pins-and-Submissions Wrestling</>}
                    linkRef={'/videos/44'}
                    imgRef={power2016}
                    alt={'video-44'}/>
                <CardComponent
                    title={<>VIDEO 42<br/>Submission Grappling<br/>Tournament. Part 2. 2014</>}
                    linkRef={'/videos/42'}
                    imgRef={video42}
                    alt={'video-42'}/>
                <CardComponent
                    title={<>VIDEO 41<br/>Submission Grappling<br/>Tournament. Part 1. 2014</>}
                    linkRef={'/videos/41'}
                    imgRef={video41}
                    alt={'video-41'}/>
                <CardComponent
                    title={<>VIDEO 37<br/>Tournament between beginners<br/>Part 2. Final fights. 2014</>}
                    linkRef={'/videos/37'}
                    imgRef={video37}
                    alt={'video-37'}/>
                <CardComponent
                    title={<>VIDEO 36<br/>Tournament between beginners<br/>Part 1. Preliminary fights. 2014</>}
                    linkRef={'/videos/36'}
                    imgRef={video36}
                    alt={'video-36'}/>
                <CardComponent
                    title={<>VIDEO 36<br/>Tournament between beginners<br/>Part 1. Preliminary fights. 2014</>}
                    linkRef={'/videos/36'}
                    imgRef={video36}
                    alt={'video-36'}/>
            </Row>
        </div>
    )
}

/*
  div(class='col-2.4')
    +card('VIDEO 44<br>The Maslenitsa Festival, 2016<br>Pins-and-Submissions Wrestling','videos/44Eng.html','img/video/wrestThumb/2016-power competition on Shrove Tuesday.jpg','video-44')
  div(class='col-2.4')
    +card('VIDEO 42<br>Submission Grappling<br>Tournament. Part 2. 2014','videos/42Eng.html','img/video/wrestThumb/video-42.jpg','video-42')
  div(class='col-2.4')
    +card('VIDEO 41<br>Submission Grappling<br>Tournament. Part 1. 2014','videos/41Eng.html','img/video/wrestThumb/video-41.jpg','video-41')
  div(class='col-2.4')
    +card('VIDEO 37<br>Tournament between beginners<br>Part 2. Final fights. 2014','videos/37Eng.html','img/video/wrestThumb/video-37.jpg','video-37')
  div(class='col-2.4')
    +card('VIDEO 36<br>Tournament between beginners<br>Part 1. Preliminary fights. 2014','videos/36Eng.html','img/video/wrestThumb/video-36.jpg','video-36')
 */