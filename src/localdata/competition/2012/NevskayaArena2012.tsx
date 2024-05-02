import mainImg from 'src/img/video/20/mma-pervaya-nevskaya-arena-2012-1/26.jpg'
import {MainImg} from "../../../common/MainImg"
import {NavLink} from "react-router-dom"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR_NEVSKAYA_ARENA_1, DIR_NEVSKAYA_ARENA_2} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants"

export const NevskayaArena2012 = () => {
  const gallery1 = useGallery(DIR_NEVSKAYA_ARENA_1)
  const gallery2 = useGallery(DIR_NEVSKAYA_ARENA_2)

  return (
    <>
      <h4>The first Nevsky Arena. MMA tournament. July, 2012</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        <b>Nevsky Arena</b> is a women's MMA tournament held in the open air. Our competitions are similar in rules to
        the well-known street fighting events, called Strelka - the ultimate fights among men in Russia. The Strelka has
        been held in St. Petersburg already since two years. It has been distinguished by its democratic character and
        has already obtained an international fame.
      </p>
      <p>
        The first Nevsky Arena took place in the Park Sosnovka on the 1st of July 2012. In the tournament
        participated: <NavLink to="/universe/girl/2012_2013/kara-teller"> Kara Teller</NavLink> (the Vityaz Club,
        Moscow, 5'7" / 123
        lb), <NavLink to="/universe/girl/2012_2013/darya-balina"> Darya Balina</NavLink> (the female self-defense Club
        "Panther", St.
        Petersburg, 5'4" / 124 lb), <b>Yulia Fedutenko</b> (the mixed marshal arts Club "Tibron", St. Petersburg, 5'8" /
        130 lb) and the MMA tournament newcomer <b>Olga</b> (St. Petersburg, 5'7" / 139 lb).<br/>
        Each fight consisted of 3 rounds of 4 minutes fighting with 2 minute breaks.
      </p>
      <h5><u>The first fight</u> Kara Teller (Moscow) vs Yulia Fedutenko (St. Petersburg)</h5>
      <p>
        <b>Yulia</b> is more of a puncher, who doesn't feel confident enough yet to wrestle. <b>Kara</b> has already
        proved herself as a staunch and universal fighter. Her previous fights she usually won with choke holds on the
        ground.
      </p>
      <p>
        Throughout the three rounds there was a hard and uncompromising struggle going on. Yulia tried to fight standing
        up, throwing punches and kicks, while Kara sought actively to bring the fight to the ground and get a submission
        by a choke hold. In the ground fight Kara was more active and tried to attack, but Yulia proved herself a very
        tough opponent and was good in defense. Several times during the fight she managed to gain a better position and
        deliver a number of punches to Kara.
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
        The twelve-minute fight didn't determine a clear winner. After the three rounds, Yulia won some advantage in the
        score. Kara would prefer to settle it in the fourth additional round.
      </p>
      <h5>
        <u>The second fight</u> Darya Balina (St. Petersburg) vs Olga (St. Petersburg)
      </h5>
      <p>
        This fight turned out to be as interesting as the previous one. There was everything here - exchange of punches
        in standing, ground wrestling and attempts of finishing off.
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
        And again, after the three rounds it was difficult to determine a winner. The fight was quite even. Draw.
      </p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a>, you can purchase the videos of the both
        MMA fights: Kara Teller vs Yulia Fedutenko (<b><u>VIDEO 20</u></b>) and Darya Balina vs Olga (<b><u>VIDEO 21</u></b>).
      </p>
    </>
  )
}