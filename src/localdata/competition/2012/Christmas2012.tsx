import imgMain from "src/img/video/09/mma-rozhdestvenskij-kubok-2012-1/16.jpg"
import {MainImg} from "src/common/MainImg"
import React from "react"
import {NavLink} from "react-router-dom"
import {useGallery} from "src/common/hooks"
import {DIR09_2, DIR09_3, DIR_CHRISTMAS2012_1, DIR_CHRISTMAS2012_2} from "../../../common/ImageContexts"
import {ButtonGallery} from "src/common/ButtonGallery/ButtonGallery"

export const Christmas2012 = () => {
  const gallery1 = useGallery(DIR_CHRISTMAS2012_1)
  const gallery2 = useGallery(DIR_CHRISTMAS2012_2)
  const gallery3 = useGallery(DIR09_2)
  const gallery4 = useGallery(DIR09_3)
  const buttonText = 'See photos'

  return (
    <>
      <h4>MMA Fights. Tournament "Christmas Cup 2012"</h4>
      <MainImg imgMain={imgMain}/>
      <p>
        Three fighters participated in the competition: <NavLink to="/girl/2012_2013/elena-vasileva2013">Elena
        Vasilyeva</NavLink> (St. Petersburg, 5’6” / 132 lb); <NavLink to="/girl/2012_2013/kara-teller">Kara
        Teller</NavLink>, a newcomer from the Namazon Club (Moscow, 5’7” / 119 lb); <NavLink
        to="/girl/2012_2013/tais2012-2013">Tais</NavLink> (St. Petersburg, 5’7” / 130 lb). The tournament was held
        in a single-round format where each fighter competed in two fights. Each fight consisted of three 4-minute rounds
        with a 1-minute rest between rounds.
      </p>
      <h5><u>The First Fight</u> Elena Vasilyeva vs Kara Teller</h5>
      <p>
        In the first two rounds, Elena had the advantage, managing to take Kara down to the mat several times and
        presenting numerous opportunities to finish the fight on the ground. However, Kara skillfully defended herself
        throughout.
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={buttonText}
      />
      <p>
        In the 3rd round, the advantage gradually shifted to Kara. She achieved full-mount on Elena, forcing her to defend
        herself. During one of Elena’s attempts to dislodge Kara, the Moscow guest capitalized on Elena’s unprotected neck
        and executed a flawless choke.
      </p>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
        buttonName={buttonText}
      />
      <h5><u>The Second Fight</u> Kara Teller vs Tais</h5>
      <p>
        Tais defeated Kara in the first round with an aggressive attack primarily consisting of kicks, many of which missed
        their mark. The fight went to the ground, where Tais secured the dominant position.<br/>
        While wrestling on top, Tais attempted an armlock. Although Kara managed to free herself, she exposed her neck to
        Tais, who capitalized on the opportunity and won by chokehold.
      </p>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
        buttonName={buttonText}
      />
      <h5><u>The Third Fight</u> Elena Vasilyeva vs Tais</h5>
      <p>
        The third fight was as brief as the second. Tais had previously defeated Elena in the first round. After taking the
        fight to the ground, Tais executed her favorite armlock, forcing Elena to submit.
      </p>
      <ButtonGallery
        index={gallery4.index}
        indexCallback={gallery4.setIndex}
        isOpen={gallery4.open}
        openCloseCallback={gallery4.setOpen}
        photos={gallery4.photos}
        slides={gallery4.slides}
        buttonName={buttonText}
      />
      <p>
        As a result, <b>Tais</b> took 1st place, <b>Kara Teller</b> secured 2nd, and <b>Elena Vasilyeva</b> took 3rd place.
      </p>
      <hr/>
      <p>
        The girls fought fiercely and without compromise in all three fights. If you enjoy such competitions, purchase our
        film (<b><u>VIDEO 9</u></b>. MMA Tournament "Christmas Cup 2012") on <a
        href="https://gumroad.com/namazonclub">Gumroad</a> to witness it all for yourself.
      </p>
    </>

  )
}