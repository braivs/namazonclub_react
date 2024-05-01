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
      <h4>MMA fights. Tournament "Christmas Cup 2012"</h4>
      <MainImg imgMain={imgMain}/>
      <p>
        In the competition participated three fighters: <NavLink to="/universe/girl/2012_2013/elena-vasileva2013"> Elena
        Vasilyeva</NavLink> (St. Petersburg, 5’6” / 132
        lb); <NavLink to="/universe/girl/2012_2013/kara-teller"> Kara Teller</NavLink>, Namazon Club’s newcomer (Moscow,
        5’7”
        / 119 lb); <NavLink to="/universe/girl/2012_2013/tais2012-2013"> Tais</NavLink> (St. Petersburg, 5’7” / 130 lb).
        The tournament was held in a single round format. The girls eventually had
        to have two fights each. Each fight consisted of three 4 min rounds with 1 min rest between each round.
      </p>
      <h5><u>The first fight</u> Elena Vasilyeva vs Kara Teller</h5>
      <p>
        In the first two rounds the advantage was on the side of Elena, who was able to throw down Kara several times on
        the mat and had a lot of chances to finish her on the ground. Notice that Kara at the same time defended herself
        skillfully.
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
        In the 3rd round the advantage gradually shifted to Kara. She managed to get a full-mount on Elena, forcing her
        to defend herself. During one of the Elena’s attempts to throw her opponent off, our guest from Moscow took
        advantage of Elena when the latter left her neck unprotected and flawlessly performed a choke.
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
      <h5><u>The second fight</u> Kara vs Tais</h5>
      <p>
        Tais defeated Kara in the first round. Her aggressive attack, consisting mainly of strikes with kicks, the
        majority of which missed the target by some way, resulted in bringing the fight into the ground, where Tais
        managed to get the top position.<br/>
        Continuing to wrestle on top Tais tried to armlock Kara. The young girl wrenched herself free but while doing
        so, she got her neck caught in the grip of Tais, who won by a choke as a result.
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
      <h5><u>The third fight</u> Elena vs Tais</h5>
      <p>
        The third fight was as brief as the second one. Elena had already been defeated by Tais in the first round.
        After bringing the fight to the ground, Tais was able to apply her favorite armlock that forced Elena to submit.
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
        As a result, <b>Tais</b> took the 1st place, <b>Kara Teller</b> won the 2nd, and <b>Elena Vasilyeva</b> the 3rd.
      </p>
      <hr/>
      <p>
        The girls fought hard and uncompromisingly in all these three fights. If you like such fights, buy our film (<b><u>VIDEO
        9</u></b>. MMA tournament "Christmas Cup 2012") on <a href="https://gumroad.com/namazonclub">Gumroad</a> and you
        will be able to see everything yourself.
      </p>
    </>
  )
}