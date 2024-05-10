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
      <h4>Beach tournament. Submission Grappling. June, 2011</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        The tournament was held in two rounds. The fights had no time limit.<br/>
        In the competition participated three fighters:
      </p>
      <ul>
        <li><b>Tais</b> (5’7” / 130 lb) - a numerous winner of club submission grappling tournaments;</li>
        <li><b>Elena Vasilyeva</b> (5’6” / 134 lb) - a young and promising Namazonian fighter. She also goes in for judo
          and armwrestling;
        </li>
        <li><b>Irina (Vlasta)</b> (5’9” / 154 lb) - a newcomer in our competitions. She is engaged in Muay Thai and pole
          dancing.
        </li>
      </ul>
      <p>
        Experienced Tais handled her opponents with relative ease, using various grappling techniques (chokes and pain
        holds). Tais took 1st place, defeating both Elena and Irina by a score of 2-0.
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
        The struggle for the 2nd place between Elena and Irina proved to be interesting und uncompromising. In their
        first fight Elena tossed Irina to the ground with a nice throw and, after some further struggle, finished the
        fight with a choke. In the second fight the advantage was on the side of Irina. She struggled a long time trying
        to choke Elena, but Elena just was not giving up... At the end – whether Irina had run out of strength or lost
        her confidence – as soon as Elena had escaped and moved on top, Irina gave up.
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
        2nd place went to Elena, 3rd place to Irina (Vlasta).
      </p>
      <hr/>
      <p>
        Do you want to know how all this was happening? Buy now on <a
        href="https://gumroad.com/namazonclub">Gumroad</a> (<b><u>VIDEO 8.</u></b> Beach Tournament. Submission
        Grappling. June, 2011) and find out.
      </p>
    </>
  )
}