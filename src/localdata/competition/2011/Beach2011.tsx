import mainImg from 'src/img/video/main/08main.jpg'
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR08_1, DIR08_2, DIR08_3} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants"

export const Beach2011 = () => {
  const gallery1 = useGallery(DIR08_1) // Elena Vasilyeva vs Tais
  const gallery2 = useGallery(DIR08_2) // Irina (Vlasta) vs Tais
  const gallery3 = useGallery(DIR08_3) // Elena Vasilyeva vs Irina (Vlasta)

  return (
    <>
      <h4>Beach Tournament. Submission Grappling. June, 2011</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        The tournament was held in two rounds without a time limit.<br/>
        The competition featured three fighters:
      </p>
      <ul>
        <li><b>Tais</b> (5’7” / 130 lb) - a frequent winner of club submission grappling tournaments;</li>
        <li><b>Elena Vasilyeva</b> (5’6” / 134 lb) - a young and promising Namazonian fighter who also practices judo
          and armwrestling;
        </li>
        <li><b>Irina (Vlasta)</b> (5’9” / 154 lb) - a newcomer to our competitions who is involved in Muay Thai and pole
          dancing.
        </li>
      </ul>
      <p>
        Experienced Tais handled her opponents with relative ease, employing various grappling techniques such as chokes
        and joint locks. Tais secured the 1st place, defeating both Elena and Irina by a score of 2-0.
      </p>
      <h5>Tais vs. Elena Vasilyeva</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <h5>Tais vs. Irina (Vlasta)</h5>
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
        The battle for 2nd place between Elena and Irina proved to be intense and uncompromising. In their first fight,
        Elena executed a successful throw, bringing Irina to the ground and eventually securing a victory with a choke.
        In the second fight, Irina gained the upper hand, persistently attempting to submit Elena, who resiliently
        defended
        herself. Eventually, Irina seemed to lose steam or confidence, allowing Elena to escape and gain a dominant
        position,
        resulting in Irina conceding the fight.
      </p>
      <h5>Irina (Vlasta) vs. Elena Vasilyeva</h5>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>
        Elena claimed 2nd place, while Irina (Vlasta) secured the 3rd place.
      </p>
      <hr/>
      <p>
        Curious to see how it all unfolded? Purchase now on <a
        href="https://gumroad.com/namazonclub">Gumroad</a> (<b><u>VIDEO 8.</u></b>
        Beach Tournament. Submission Grappling. June, 2011) and witness the action yourself.
      </p>
    </>
  )
}