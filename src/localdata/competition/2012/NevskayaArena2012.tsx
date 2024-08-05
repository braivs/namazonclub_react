import mainImg from 'src/img/video/20/mma-pervaya-nevskaya-arena-2012-1/26.jpg'
import {MainImg} from "../../../common/MainImg"
import {NavLink} from "react-router-dom"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR_NEVSKAYA_ARENA_1, DIR_NEVSKAYA_ARENA_2} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants/constants"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

export const NevskayaArena2012 = () => {
  const gallery1 = useGallery(DIR_NEVSKAYA_ARENA_1)
  const gallery2 = useGallery(DIR_NEVSKAYA_ARENA_2)

  return (
    <>
      <h4>The First Nevsky Arena: MMA Tournament, July 2012</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        <b>Nevsky Arena</b> is an open-air women's MMA tournament inspired by the well-known Strelka street fighting
        events
        in Russia. The Strelka has gained international fame for its democratic nature and tough competition.
      </p>
      <p>
        The inaugural Nevsky Arena took place in Park Sosnovka on July 1, 2012. Participants included: <NavLink
        to="/girl/2012_2013/kara-teller">Kara Teller</NavLink> (Vityaz Club, Moscow, 5'7" / 123 lb), <NavLink
        to="/girl/2012_2013/darya-balina">Darya Balina</NavLink> (Panther Female Self-Defense Club, St.
        Petersburg,
        5'4" / 124 lb), <b>Yulia Fedutenko</b> (Tibron Mixed Martial Arts Club, St. Petersburg, 5'8" / 130 lb), and
        newcomer
        <b>Olga</b> (St. Petersburg, 5'7" / 139 lb). Each fight consisted of 3 rounds lasting 4 minutes each, with
        2-minute
        breaks in between.
      </p>
      <h5><u>The First Fight:</u> Kara Teller (Moscow) vs Yulia Fedutenko (St. Petersburg)</h5>
      <p>
        <b>Yulia</b> relies more on striking and is less confident in wrestling, while <b>Kara</b> has established
        herself
        as a versatile fighter, often winning her fights with choke holds on the ground.
      </p>
      <p>
        The three-round fight was a hard and uncompromising struggle. Yulia focused on striking, throwing punches and
        kicks,
        while Kara actively worked to bring the fight to the ground and secure a submission with a choke hold. Kara was
        more aggressive in ground fighting, but Yulia proved to be a resilient opponent, effectively defending herself
        and
        delivering punches whenever she gained advantageous positions.
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
        After the twelve-minute fight, no clear winner emerged. Yulia gained an advantage in the score, but Kara was
        eager
        to settle it in an additional fourth round.
      </p>
      <h5>
        <u>The Second Fight:</u> Darya Balina (St. Petersburg) vs Olga (St. Petersburg)
      </h5>
      <p>
        This fight proved to be just as intense as the first, featuring exchanges of punches standing up, ground
        wrestling,
        and attempts to finish off.
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
        Once again, after three rounds, determining a winner was difficult as the fight remained evenly matched. It
        ended in
        a draw.
      </p>
      <hr/>
      <p>
        Visit our store on <a href={LINK_SHOP_MAIN}>Patreon</a> to purchase videos of both MMA fights:
        Kara Teller vs Yulia Fedutenko (<b><u>VIDEO 20</u></b>) and Darya Balina vs Olga (<b><u>VIDEO 21</u></b>).
      </p>
    </>

  )
}