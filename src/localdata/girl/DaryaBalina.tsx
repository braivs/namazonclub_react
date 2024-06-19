import imgMain from 'src/img/video/21/mma-pervaya-nevskaya-arena-2012-2/37.jpg'
import sC from "../../common/styles.module.scss"
import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"

import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

const images = require.context('src/img/video/18/mma-sportivnyj-prazdnik-2012-1', false)
const images2 = require.context('src/img/video/21/mma-pervaya-nevskaya-arena-2012-2', false)

export const DaryaBalina = () => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const photos = getGalleryPhotosFromRequire(images)
    const slides = getSlides(photos)

    const [open2, setOpen2] = useState(false)
    const [index2, setIndex2] = useState(-1)
    const photos2 = getGalleryPhotosFromRequire(images2)
    const slides2 = getSlides(photos2)

    return (
      <>
        <h4>Darya Balina</h4>
        <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
        <p>
          <b>Darya Balina</b> is a young fighter from St. Petersburg (5’4” / 124 lb). She trains in martial arts at the female self-defense club "Panther". At the Namazon Club, she had a pair of hard-fought MMA fights where she displayed stamina and a will to win. In her last fight there, Darya faced an opponent who exceeded her weight by about 15 pounds. Despite this disadvantage, she was able to avoid defeat.
        </p>
        <p>
          The first MMA fight that Darya Balina had at the Namazon Club was against our guest from Moscow, <NavLink to="/universe/girl/2012_2013/kara-teller">Kara Teller</NavLink> (5’7” / 123 lb). It went two rounds with the more experienced Kara prevailing, winning by a choke in the middle of the second round.
        </p>
        <ButtonGallery
          index={index}
          indexCallback={setIndex}
          isOpen={open}
          openCloseCallback={setOpen}
          photos={photos}
          slides={slides}
          buttonName={'See photos'}
        />
        <p>
          The second time Darya fought in MMA was in July 2012 when she participated in the Nevskaya Arena Tournament organized by the club. In that fight, her opponent was another MMA newcomer, <b>Olga</b> (5’7” / 139 lb). Both girls were highly motivated to show themselves in the best possible way. They fought three rounds of four minutes each, with one minute of rest between rounds. Olga was 15 lb (7 kg) heavier than Darya and had heavier punches as well, so Darya took quite a beating from her. However, Darya toughed it out through all the rounds and tied the match. It was a hard-won draw.
        </p>
        <ButtonGallery
          index={index2}
          indexCallback={setIndex2}
          isOpen={open2}
          openCloseCallback={setOpen2}
          photos={photos2}
          slides={slides2}
          buttonName={'See photos'}
        />
        <h4><u>Results for MMA fight 2012</u></h4>
        <p>Win-loss-draw record – 0:1:1 (as of July 1, 2012)</p>
        <hr/>
        <p>
          In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a>, you can purchase full videos of Darya’s MMA fights held at the Namazon Club (Videos 18 and 21).
        </p>
      </>
    )
}