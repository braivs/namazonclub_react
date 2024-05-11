import mainImg from 'src/img/video/11/10.jpg'
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {
  DIR11,
  DIR14_1,
  DIR14_2,
  DIR_BEACH_MIX_2011,
  DIR_BEACH_MIX_2011_2,
  DIR_BEACH_MIX_2011_3
} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants"

export const BeachMix2011 = () => {
  const gallery1 = useGallery(DIR_BEACH_MIX_2011)
  const gallery2 = useGallery(DIR_BEACH_MIX_2011_2)
  const gallery3 = useGallery(DIR_BEACH_MIX_2011_3)
  const gallery4 = useGallery(DIR14_1)
  const gallery5 = useGallery(DIR14_2)
  const gallery6 = useGallery(DIR11)

  return (
    <>
      <h4>Mixed beach tournament. Submission Grappling. July, 2011</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        The tournament was held in two rounds on a beach, with each fight fought without time limit. There were 4
        fighters contesting in the official part of the tournament. Two Namazonian girls: <b>Tais</b> (5’7” / 130 lb) -
        repeated winner of the club tournaments on submission grappling; champion and prizewinner of competitions of
        different ranks on kickboxing, karate and sanda and <b>Elena Vasilyeva</b> (5’6” / 135 lb) - a young, promising
        girl. And two male wrestlers: <b>Alex</b> (5’9” / 154 lb) and <b>Villian</b> (5’8” / 177 lb). Both men
        participated repeatedly in competitions on submission grappling.<br/>
        <b>Villian</b> and <b>Tais</b> were the favorites in the tournament. They both handled their opponents without
        much difficulty. Villian defeated Alex in both fights.
      </p>
      <h5>Villian vs Alex</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>Villian wrestled Elena a little soft, giving her the opportunity to prove herself in attack.</p>
      <h5>Villian vs Elena Vasilyeva</h5>
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
        And here also ... Villian won in the end - 2:0.
      </p>
      <p>
        Tais also held two victories over both Elena Vasilyeva and Alex. And at that, while Villian won all his fights
        by choking his opponents, Tais used various techniques including chokes, body scissors, neck scissors and
        different pain holds.
      </p>
      <h5>Tais vs Elena Vasilyeva</h5>
      <ButtonGallery
        index={gallery3.index}
        indexCallback={gallery3.setIndex}
        isOpen={gallery3.open}
        openCloseCallback={gallery3.setOpen}
        photos={gallery3.photos}
        slides={gallery3.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <h5>Tais vs Alex</h5>
      <ButtonGallery
        index={gallery4.index}
        indexCallback={gallery4.setIndex}
        isOpen={gallery4.open}
        openCloseCallback={gallery4.setOpen}
        photos={gallery4.photos}
        slides={gallery4.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>
        The two fights between Villian and Tais decided the fate of the first place in the tournament. Villian won their
        first fight, Tais the second. So it was a draw in the end. Our favorites shared the 1st and 2nd place.
      </p>
      <h5>Tais vs Villian</h5>
      <ButtonGallery
        index={gallery5.index}
        indexCallback={gallery5.setIndex}
        isOpen={gallery5.open}
        openCloseCallback={gallery5.setOpen}
        photos={gallery5.photos}
        slides={gallery5.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>
        The struggle for the 3rd place between Elena Vasilyeva and Alex was especially tough. Let it suffice to say that
        their first fight lasted more than 12 minutes and the organizers of the tournament regretted that they hadn’t
        provided the division of the fights into rounds. In the end Elena won by a choke hold.
      </p>
      <h5>Elena Vasilyeva vs Alex</h5>
      <ButtonGallery
        index={gallery6.index}
        indexCallback={gallery6.setIndex}
        isOpen={gallery6.open}
        openCloseCallback={gallery6.setOpen}
        photos={gallery6.photos}
        slides={gallery6.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <p>
        The second fight was also won by Elene Vasilyeva. As a result 2:0. The 3rd place went to Elena!
      </p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a> you can purchase the full video of a
        wrestling match of Elena Vasilyeva against Alex (<b>VIDEO 11.</b> Alex vs. Elena Vasilyeva. Mixed Beach
        Wrestling. July, 2011) and also the full videos of three wrestling matches of Tais against men (<b>VIDEO
        14.</b> Two men against one woman. Mixed Wrestling. Part 1. 2011).
      </p>
    </>
  )
}