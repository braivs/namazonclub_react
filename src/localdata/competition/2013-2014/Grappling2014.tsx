import {NavLink} from "react-router-dom"
import imgMain from "../../../img/video/41/kz/06.jpg"
import imgMain2 from "../../../img/competitions/2013_2014/grappling_2014/2014-sg-tournament-winners.jpg"
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR41_KZ, DIR41_VZ, DIR42, DIR_GRAPPLING2014_AWARDS} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"


export const Grappling2014 = () => {
  const gallery1 = useGallery(DIR41_KZ)
  const gallery2 = useGallery(DIR41_VZ)
  const gallery3 = useGallery(DIR42)
  const gallery4 = useGallery(DIR_GRAPPLING2014_AWARDS)

  const buttonText = 'See photos'

  return (
    <>
      <h4>Submission Grappling tournament for the prize of the Namazon Club. October, 2014</h4>
      <p>
        In this October Grappling tournament participated three girls. Two of them had competed with each other
        at <NavLink to="/universe/competition/2013_2014/tournament-2014">the grappling tournament between
        beginners</NavLink> that took place on the 9th of May 2014 at the Club. And now, just as then, Victoria
        Vardugina (144 lb) came out a winner. Christina Shvets (152
        lb) now took the 2nd place (a little better than in May); and the newcomer of our competitions Zoya Doroeeva
        (124 lb) remained on the 3rd place.
      </p>
      <MainImg imgMain={imgMain}/>
      <p>
        The fights were generally conducted under Submission Grappling rules; however, a win could be also secured by
        pinning an opponent’s back to the mat for a 5 count pin.<br/>
        The tournament was held in two rounds. The fights of the first round lasted for 4 minutes each. If there was no
        winner within the regular full time, the fight was interrupted for a rest break of 2 mins, then the opponents
        wrestled on for another two minutes.<br/>
        In the 2nd round, after the four minutes of the regular time and two minutes of rest, the girls continued to
        fight hard for 10 minutes of overtime!
      </p>
      <p>Below you may view some snapshots from our hot October tournament.</p>
      <h5><u>Christina Shvets vs Zoya Dorofeeva</u></h5>
      <p>
        Even though Zoya was a newcomer in our competitions, she was not a total beginner in combat sports. Her
        experience included several years of training in the Russian martial arts. Hence, despite the great disparity in
        weight (Christina - 152 lb, Zoya - 124 lb), both fights between the girls were almost evenly matched and very
        strenuous. Suffice it to say that in the first round of their contest, during the four minutes of the regular
        time plus two extra minutes the two opponents were not able to decide between them who would win the fight.
        After the six mins of struggle there was still a draw.<br/>
        However, in the 2nd round, the stronger Christina defeated Zoya by pinning her down before the end of the
        regular time.
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
      <h5><u>Victoria Vardugina vs Zoya Dorofeeva</u></h5>
      <p>
        Victoria beat Zoya easily enough, choking her to submission in both rounds within the regular time. It should be
        pointed out, though, that there were a few moments when Zoya could take over the initiative and even submit
        Victoria, but she just wasn’t able to materialize those opportunities.
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
      <h5><u>Victoria Vardugina vs Christina Shvets</u></h5>
      <p>
        Christina and Victoria had met each other five months ago at the <a href="tournament-2014.html">grappling
        tournament between beginners</a>. That time Victoria had celebrated victory in a very hard-fought match.
        Christina had trained a lot since then, doing her best to improve in wrestling. She had gained weight, strength
        and experience, which made her a real fighter and dangerous opponent for other girls on the wrestling mat. Vika,
        by contrast, had reduced her weight, so by the time of their October encounter she had been outweighed by 8
        pounds. We wondered whether Christina would be able to take advantage of it and avenge her last loss to
        Victoria. Anyway, the fight between these two rivals promised to be an interesting one. And so it turned out to
        be. In the first round, neither regular time nor overtime revealed the winner. It was a draw. In the 2nd round,
        only on the 10th minute of the extra time Victoria managed to submit Christina with a choke hold.<br/>
        By the end, both wrestlers were exhausted. The girls’ physical fitness and wrestling endurance appeared to be
        the decisive factors here, which just added even more to this intense and exciting final bout.
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
        As a result, <b>Victoria Vardugina</b>, <b>Christina Shvets</b> and <b>Zoya Dorofeeva</b> took the 1st, 2nd,
        and 3rd places respectively.
      </p>
      <ButtonGallery
        index={gallery4.index}
        indexCallback={gallery4.setIndex}
        isOpen={gallery4.open}
        openCloseCallback={gallery4.setOpen}
        photos={gallery4.photos}
        slides={gallery4.slides}
        buttonName={'Awards photos'}
      />
      <MainImg imgMain={imgMain2}/>
      <p>From left to right: Zoya, Christina and Victoria.</p>
      <hr/>
      <p>
        Watch the fights <b>Zoya</b> vs <b>Christina</b> and <b>Zoya</b> vs Vika in the <b>VIDEO 41</b>, and the fight
        of Vika vs Christina in the <b>VIDEO 42</b>. The both videos are available at <a
        href="https://gumroad.com/namazonclub">Gumroad</a>.
      </p>
    </>
  )
}