import mainImg from 'src/img/video/03mix/wm1/12.jpg'
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR03_1, DIR03_2, DIR03_3} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants"

export const BeachMix2010 = () => {
  const gallery1 = useGallery(DIR03_1) // Natalia Mysik  vs  Alex
  const gallery2 = useGallery(DIR03_2) // Alex  vs  Tais
  const gallery3 = useGallery(DIR03_3) // Natalia Mysik vs Tais

  return (
    <>
      <h4>Two girls vs one man. 2010</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        <b>Alex</b> (5’9” / 150 lb) and two regular Namazon Club’s members <b>Natalia Mysik</b> (5’11” / 154 lb)
        and <b>Tais</b> (5’7” / 132 lb). The competition was held in two rounds, with no specific time limit set for any
        individual fight. Each fight went on until one of the opponents was unable to continue and admitted defeat. The
        submissions were either joint locks or chokes.
      </p>
      <h5>Alex vs Natalia Mysik</h5>
      <p>
        The first who stepped forward on the slightly wet sand were Natasha and Alex. The fight began with Alex getting
        the upper hand. At first he was able to drop his opponent down on the sand and then to submit her. That seemed
        quite irritating to ambitious Namazonian woman who had apparently thought she would easily win. She got pretty
        angry about her unexpected defeat, so in the next two rounds she fought with Alex more aggressively and gained
        two convincing victories, both times pinning Alex down with her strong body in the sand and immobilizing him in
        this position.<br/>
        The final score in the match was 2-1 for Natalia Mysik.
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
      <h5>Alex vs Tais</h5>
      <p>
        The second Namazonian wrestler Tais gave our guest from Moscow no chance at all to win. She completely dominated
        over poor Alex, forcing him to submit again and again. Each fight ended with Alex getting stuck in a choke hold
        or an armlock.<br/>
        In the end, Tais defeated him by the score of 3-0.
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
      <h5>Natalia Mysik vs Tais</h5>
      <p>
        The first two fights between Natalia Mysik and Tais developed in a dramatic way. The advantage shifted from one
        wrestler to the other almost every few seconds. Funny enough, but experienced Tais made mistakes one after the
        other! On one occasion, for example, when trying to execute a throw, she lost her footing on the loose sand and
        fell down finding herself an instant later in a danger position. The other blunders she made were even worse
        than this one. In a word, Natasha had real chances to win the ground fights – at least in the first two rounds.
        However, even though she tried hard, she wasn't able to take advantage of these favorable positions, and
        suffered defeats in each round.<br/>
        By the end of the tournament, fatigue began to tell upon Natalia. In the final round she did not fight as
        aggressively as she did earlier, and Tais gained a quick submission victory, finishing Natalia with a pin
        combined with an armbar.<br/>
        Thus, there were no particular surprises. Tais won over Natalia Mysik with the total score of 3-0.
      </p>
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
        Eventually, Tais was the winner of the tournament, Natalia Mysik took the 2nd place, and Alex was on the 3rd.
      </p>
      <hr/>
      <p>
        The full video of the beach mixed wrestling round-robin tournament with participation of Natalia Mysik, Tais and
        Alex (<b>VIDEO 3.</b> Beach Submission Grappling. Two girls vs one man), is available for purchasing in our
        online store on <a href="https://gumroad.com/namazonclub">Gumroad</a>.
      </p>
    </>
  )
}