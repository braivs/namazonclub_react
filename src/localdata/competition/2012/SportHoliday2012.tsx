import imgMain from "src/img/video/18/mma-sportivnyj-prazdnik-2012-1/14.jpg"
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {NavLink} from "react-router-dom"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {useGallery} from "../../../common/hooks"
import {DIR_MMA_SPORT_HOLIDAY_1, DIR_MMA_SPORT_HOLIDAY_2, DIR_MMA_SPORT_HOLIDAY_3} from "../../../common/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants"

export const SportHoliday2012 = () => {
  const gallery1 = useGallery(DIR_MMA_SPORT_HOLIDAY_1)
  const gallery2 = useGallery(DIR_MMA_SPORT_HOLIDAY_2)
  const gallery3 = useGallery(DIR_MMA_SPORT_HOLIDAY_3)

  return (
    <>
      <h4>MMA fights in the May holidays. Results. May, 2012</h4>
      <MainImg imgMain={imgMain}/>
      <p>
        Two rating MMA fights were held in our club May 8, 2012. Each fight consists of 3 rounds, each round lasts 3
        minutes. The participants in the fights:
      </p>
      <ul>
        <li><NavLink to="/girl/2012_2013/tais2012-2013"> Tais</NavLink> (St. Petersburg, 5'7" / 132 lb) – the
          best fighter of the club, she had never lost before;
        </li>
        <li><NavLink to="/girl/2012_2013/kara-teller"> Kara Teller</NavLink> (Moscow, 5'7" / 119 lb) – a young
          promising fighter who has by now gained a victory over two girls from the Namazon Club;
        </li>
        <li><NavLink to="/girl/2012_2013/darya-balina"> Darya Balina</NavLink> (St. Petersburg, 5'4" / 124 lb)
          – a newcomer in our competitions, going in hard for ultimate fightings lately.
        </li>
      </ul>
      <h5><u>The first fight</u> Kara Teller vs Darya Balina</h5>
      <p>
        The fight was already interesting because a newcomer took part in it. The whole first round the girls fought in
        standing position. The round was won by Kara. She worked on a long distance and she did shake Darya a few times
        with accurate punches. The start of the second round was similar to the first one, but at the middle of the
        round the two girls fell down grappling with each other on the floor, and Kara proved to be stronger there.
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
      <h5><u>The second fight</u> Kara Teller vs Tais</h5>
      <p>
        <b>Kara</b> and <b>Tais</b> had already met before and knew each other well. During the most part of the match
        the girls wrestled on the ground. Tais had some advantage, however, Kara defended skillfully. At the end of the
        first round Tais did not fulfill the command of the ref on the mat, entered into conversation with him and as a
        result she received a foul. Thus, the first score went to Kara. In the second round Tais managed to use her
        advantage in wrestling. She defeated Kara via submission with a chokehold. However, after more careful review of
        the match, the FOUL received by Tais was changed to DISQUALIFICATION. The final victory was awarded to Kara
        Teller. The total score of their matches became 2-1 in favor of Tais.
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
      <p>At the festival there were also submission grappling matches (MM, WW, WM) and the contests on legwrestling and
        pushing the opponent out of the mat.</p>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <hr/>
      <p>
        If you like such fights, buy our film (<b><u>VIDEO 18.</u></b> MMA tournament. May, 2012) on <a
        href="https://gumroad.com/namazonclub">Gumroad</a> and you will be able to see everything yourself.
      </p>
    </>
  )
}