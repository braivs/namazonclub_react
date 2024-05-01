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
      <h4>MMA and submission grappling. Kara against Svetlana and Tais</h4>
      <MainImg imgMain={imgMain}/>
      <p>
        The participants in the fights: <NavLink to="/universe/girl/2012_2013/kara-teller"> Kara
        Teller</NavLink> (Moscow, 5’7” / 121
        lb) and Svetlana Solovyova (St. Petersburg, 5’7” / 124 lb). There is no need to specially introduce Kara
        anymore. It is not for the first time that she is taking part in the competitions in St. Petersburg. You could
        call her fighting style “street fight”. Svetlana is very strong physically. She prefers striking combat sports,
        such as boxing or kickboxing.<br/>
        Quite obviously, Svetlana Solovyova (St. Petersburg; 5’7” / 124 lb) was superior to Kara in physical power. For
        example, dynamometric measures of her hand grip strength were 56.3 kg (124 lb), which was more than her own
        weight! But on Kara’s side was her fighting experience that made up for the lack of her strength during their
        fight.
      </p>
      <p>
        In the beginning, when the girls were exchanging blows and kicks in stand up, Svetlana was still able to somehow
        withstand Kara’s attacks, but when the fight was brought to the ground, Kara’s advantage became more evident.
        Kara won by a choke hold in 1:13.
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
        Since Kara’s fight against Svetlana was not long enough and did not exhaust the girls too much, we decided to
        continue our sporting entertainment with an additional (not scheduled) fight in MMA
        between <b>Kara</b> and <b>Tais</b> (St. Petersburg, 5’7” / 132 lb).
      </p>
      <p>
        Note that this was the second time they met each other on a wrestling mat. In their previous fight, as you
        remember, Tais defeated Kara.<br/>
        This time the fight between them was even more aggressive and strenuous and lasted two and a half times longer.
        Kara was even able to take over for a short while from time to time. However, this was not enough to hold out
        too long against powerful Tais who again, as in their first fight, showed her ability to dominate and, after a
        few minutes of struggling, finished Kara off with a choke.
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
        By the end of our sporting event, <b>Kara Teller</b> and <b>Svetlana Solovyova</b> tested their strengths in a
        submission grappling fight with each other.
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
        The fight ended in a draw. Unfortunately, the physically more powerful Svetlana didn't have enough skill to
        defeat Kara, while the more skillful Kara wasn’t strong enough to handle Svetlana. Though who knows, maybe if
        the girls had not grown so tired, the outcome of their fight could have been different.
      </p>
      <hr/>
      <p>
        In our online store on <a href="https://gumroad.com/namazonclub">Gumroad</a>, you can purchase a video that
        includes Kara’s fights in MMA against Svetlana and Tais, and also her submission grappling fight against
        Svetlana (<b><u>VIDEO 17.</u></b> MMA and Submission Grappling).
      </p>
    </>
  )
}