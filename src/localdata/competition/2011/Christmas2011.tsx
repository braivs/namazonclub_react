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
      <h4>Submission Grappling Tournament "Christmas Cup 2011"</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        The Submission Grappling tournament <b>"Christmas Cup 2011"</b>, organized by the Namazon Club and Kempo-Kan School
        of Martial Arts, took place on January 6, 2011, in a school sports hall. The tournament featured two rounds and
        included the following participants: <b>Natalia Mysik</b> (5'11" / 154 lb), <b>Ksenia Voloshina</b> (5'3" / 141 lb),
        and <b>Valentina Perfilyeva</b> (5'8" / 139 lb).<br/>
        One notable feature of the competition was the significant disparity in weight and height among the wrestlers. Natalia,
        being much heavier and taller than her opponents, frequently utilized her size advantage to secure pinning holds,
        especially School Girl Pins, which she would then convert into armlocks or chokes. One of these chokes even resulted
        in her opponent being knocked out.
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
        Natalia emerged victorious in the tournament, with Ksenia and Valentina taking 2nd and 3rd places respectively.
      </p>
      <p>
        Additionally, there was a prize fight between <b>Tais</b> (5'7" / 127 lb) and <b>Natalia Mysik</b> (5'11" / 154 lb).
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
        Natalia, having been exhausted from her tournament victory, was convincingly defeated by Tais in their subsequent fight.
      </p>
      <hr/>
      <p>
        If you enjoy watching long pinning holds, head scissors, and chokes in women’s fights, you will appreciate the video
        recording of this tournament.<br/>
        Want to witness all the action? Purchase now on <a href="https://gumroad.com/namazonclub">Gumroad</a> (<b><u>VIDEO 4.</u></b>
        "Christmas Cup 2011". Tournament on Submission Grappling) and experience it for yourself.
      </p>
    </>
  )
}