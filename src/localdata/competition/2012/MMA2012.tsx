import imgMain from "src/img/video/17/mma-kara-svetlany-2012-2/5.jpg"
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {NavLink} from "react-router-dom"
import {useGallery} from "../../../common/hooks"
import {DIR17_1, DIR17_2, DIR17_3} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"

export const MMA2012 = () => {
  const gallery1 = useGallery(DIR17_1)
  const gallery2 = useGallery(DIR17_2)
  const gallery3 = useGallery(DIR17_3)
  const buttonText = 'See photos'

  return (
    <>
      <h4>MMA and Submission Grappling: Kara against Svetlana and Tais</h4>
      <MainImg imgMain={imgMain}/>
      <p>
        The participants in the fights were <NavLink to="/girl/2012_2013/kara-teller">Kara
        Teller</NavLink> (Moscow, 5’7” / 121 lb) and Svetlana Solovyova (St. Petersburg, 5’7” / 124 lb). Kara is a
        familiar
        face in competitions in St. Petersburg, known for her "street fight" style. Svetlana, on the other hand, excels
        in
        striking combat sports like boxing and kickboxing, showcasing impressive physical strength with a hand grip
        measure
        exceeding her own body weight.
      </p>
      <p>
        Initially, during the stand-up exchanges where blows and kicks were traded, Svetlana managed to hold her own
        against
        Kara. However, once the fight transitioned to the ground, Kara's experience and technique became apparent. Kara
        secured victory with a choke hold at 1:13.
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
        Since Kara's bout with Svetlana was relatively short and not too taxing for the fighters, an additional,
        unscheduled
        MMA fight between <b>Kara</b> and <b>Tais</b> (St. Petersburg, 5’7” / 132 lb) was arranged.
      </p>
      <p>
        This was their second encounter on the mat. In their previous match, Tais had emerged victorious over Kara. The
        rematch proved even more intense and enduring, lasting significantly longer. While Kara managed to gain moments
        of
        control intermittently, she ultimately couldn't withstand Tais's formidable strength and grappling ability.
        After a
        few minutes of fierce struggle, Tais secured another victory over Kara with a choke hold.
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
      <p>
        To conclude the event, <b>Kara Teller</b> and <b>Svetlana Solovyova</b> faced off in a submission grappling
        match.
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
      <p>
        The match ended in a draw. Despite Svetlana's superior physical strength, Kara's skill prevented her from
        securing
        a victory, and Kara's technical ability was insufficient to overcome Svetlana's power. Perhaps with less
        fatigue,
        the outcome could have been different.
      </p>
      <hr/>
      <p>
        You can purchase a video featuring Kara's MMA fights against Svetlana and Tais, as well as her submission
        grappling
        bout with Svetlana, from our online store on <a href="https://gumroad.com/namazonclub">Gumroad</a> (<b><u>VIDEO
        17.</u></b>
        MMA and Submission Grappling).
      </p>
    </>

  )
}