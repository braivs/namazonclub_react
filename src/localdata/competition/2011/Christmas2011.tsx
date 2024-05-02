import mainImg from 'src/img/video/04/19.jpg'
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR_CHRISTMAS_2011_1, DIR_CHRISTMAS_2011_2} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants"

export const Christmas2011 = () => {
  const gallery1 = useGallery(DIR_CHRISTMAS_2011_1)
  const gallery2 = useGallery(DIR_CHRISTMAS_2011_2)

  return (
    <>
      <h4>Submission Grappling tournament "Christmas Cup 2011"</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        The Submission Grappling tournament <b>"Christmas Cup 2011"</b>, organized by the Namazon Club and Kempo-Kan
        School of Martial Arts, was held on 6 January 2011 in the sport hall of a school. It was fought in two rounds.
        In the tournament participated: <b>Natalia Mysik</b> (5'11" / 154 lb), <b>Ksenia Voloshina</b> (5'3" / 141 lb)
        and <b>Valentina Perfilyeva</b> (5'8" / 139 lb).<br/>
        A feature of the competition was a big disparity in weight and height between the wrestlers. One of them
        (Natalia) was much heavier and taller than the others. Using this advantage, she frequently put her opponents in
        pinning holds, especially School Girl Pins, which she would then easily turn into armlocks or chokes. One of
        these chokes even resulted in her opponent’s knockout.
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>
        Finally, Natalia became a winner. Ksenia and Valentina took 2nd and 3rd places respectively.
      </p>
      <p>
        Beyond the tournament, there was a prize fight between <b>Tais</b> (5'7" / 127 lb) and <b>Natalia
        Mysik</b> (5'11" / 154 lb).
      </p>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>
        The tournament she had won exhausted Natalia. That helped Tais afterwards to gain a convincing victory over her.
      </p>
      <hr/>
      <p>
        If you like long pinning holds, head scissors and chokes in women’s fights, you will love the video record of
        this tournament.<br/>
        Do you want to know how all this was happening? Buy now on <a
        href="https://gumroad.com/namazonclub">Gumroad</a> (<b><u>VIDEO 4.</u></b> "Christmas Cup 2011". Tournament on
        Submission Grappling) and find out.
      </p>
    </>
  )
}