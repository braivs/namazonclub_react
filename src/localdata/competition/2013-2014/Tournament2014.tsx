import {MainImg} from "../../../common/MainImg"
import imgMain from "../../../img/video/36/03.jpg"
import imgMain2 from "../../../img/competitions/2013_2014/tournament_2014/DSC03831.jpg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {
  DIR36_TOURNAMENT2014_1,
  DIR36_TOURNAMENT2014_2,
  DIR36_TOURNAMENT2014_3,
  DIR37_TOURNAMENT2014_1,
  DIR37_TOURNAMENT2014_2
} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {NavLink} from "react-router-dom"

export const Tournament2014 = () => {
  const gallery1 = useGallery(DIR36_TOURNAMENT2014_1)
  const gallery2 = useGallery(DIR36_TOURNAMENT2014_2)
  const gallery3 = useGallery(DIR36_TOURNAMENT2014_3)
  const gallery4 = useGallery(DIR37_TOURNAMENT2014_1)
  const gallery5 = useGallery(DIR37_TOURNAMENT2014_2)

  const buttonName = 'See photos'

  return (
    <>
      <h4>Wrestling tournament for beginners. Women only. May, 2014</h4>
      <p>
        As practice shows, every girl in some ways possesses fighting skills and instincts of self-defence, and is even
        capable of participating in special athletic competitions. It just takes you to believe in yourself and to not
        be afraid of your opponents.<br/>
        Our tournament was conducted under submission grappling rules enhanced by an additional rule allowing the girls
        to defeat an opponent by pinning and holding her down on her back till a count of 10.
      </p>
      <MainImg imgMain={imgMain}/>
      <p>
        In the tournament participated five girls (light weight class): <b>Christina Shvets</b> (67.4 kg / 148.5
        lb), <b>Daria Uvarova</b> (66.5 kg / 146.6 lb), <b>Irina Dzhanaeva</b> (70.7 kg / 155.9 lb), <b>Nina
        Trofimova</b> (61.1 kg / 134.7 lb) and <b>Victoria Vardugina</b> (70.7 kg / 155.9 lb).<br/>
        For all the girls, except for Victoria, this was the first experience in this type of competitions. Victoria,
        unlike them, had before then won <NavLink to="/universe/competition/2013_2014/tournament-2013">a female
        single combat tournament in October
        2013</NavLink> by submitting a young ambitious wrestler Lidiya Oslopovskih in the final submission grappling
        match.<br/>
        Vika is a strong girl, in terms of physical strength. Apart from everything else, she competes with success in
        college arm wrestling events.
      </p>
      <p>
        All girls fought with each other till two wins. And each round of each match was limited to four minutes.
      </p>
      <h5><u>Preliminary fights</u></h5>
      <p>
        There were three fights in the preliminary part of the tournament. In the first one, <b>Victoria
        Vardugina</b> fought against <b>Nina Trofimova</b> and defeated her twice, finishing the 1st round with a hold
        down and the 2nd with a choke.
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={buttonName}
      />
      <p>
        The second fight was between <b>Daria Uvarova</b> and <b>Irina Dzhanaeva</b>. Daria won two rounds one after
        another (the 1st one by applying an arm lock, the 2nd - by hold down).
      </p>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
        buttonName={buttonName}
      />
      <p>
        The third fight was the most intense and exciting of all three, with <b>Christina Shvets</b> struggling hard
        against big and strong <b>Victoria Vardugina</b>. The winner was declared only after the end of the 3rd round.
        Christina won the first round with a choke, but in the next two rounds, to her disappointment, she was defeated
        (choked) by Victoria, though she struggled desperately up to the very last second.
      </p>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
        buttonName={buttonName}
      />
      <h5><u>Final fights</u></h5>
      <p>
        According the results of the preliminary fights, the 3rd place went to <b>Christina Shvets</b>. Then <b>Nina
        Trofimova</b> and <b>Irina Dzhanaeva</b> competed with each other for the 4th place. After a short struggle Nina
        gained a victory by submitting her opponent twice (by means of an armbar in the 1st round and by securing a
        choke hold in the 2nd).
      </p>
      <ButtonGallery
        index={gallery4.index}
        indexCallback={gallery4.setIndex}
        isOpen={gallery4.open}
        openCloseCallback={gallery4.setOpen}
        photos={gallery4.photos}
        slides={gallery4.slides}
        buttonName={buttonName}
      />
      <p>
        The final fight was an interesting encounter between <b>Daria Uvarova</b> and <b>Victoria Vardugina</b>. The
        wrestlers were almost evenly matched. The first round of their match did not determine a winner, though Victoria
        had some small advantage over her young beautiful opponent. In the second round, Victoria was at long last able
        to secure a victory with a nice pinning hold which Daria could not escape in spite of all her efforts.
      </p>
      <ButtonGallery
        index={gallery5.index}
        indexCallback={gallery5.setIndex}
        isOpen={gallery5.open}
        openCloseCallback={gallery5.setOpen}
        photos={gallery5.photos}
        slides={gallery5.slides}
        buttonName={buttonName}
      />
      <p>
        <b>Victoria Vardugina</b>, <b>Daria Uvarova</b> and <b>Christina Shvets</b> eventually won the 1st, 2nd and 3rd
        places respectively.
      </p>
      <MainImg imgMain={imgMain2}/>
      <p>
        From left to right: Victoria, Daria, Christina
      </p>
      <hr/>
      <p>
        The VIDEO 36 of our video collection contains the preliminary fights of the tournament, and the VIDEO 37
        features the final fights. Both videos are available for purchasing in our on-line store on <a
        href="https://gumroad.com/namazonclub">Gumroad</a>.
      </p>
    </>

)
}