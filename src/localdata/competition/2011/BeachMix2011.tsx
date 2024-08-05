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
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants/constants"
import {LINK_SHOP_MAIN} from "../../../common/constants/shopLinks"

export const BeachMix2011 = () => {
  const gallery1 = useGallery(DIR_BEACH_MIX_2011)
  const gallery2 = useGallery(DIR_BEACH_MIX_2011_2)
  const gallery3 = useGallery(DIR_BEACH_MIX_2011_3)
  const gallery4 = useGallery(DIR14_1)
  const gallery5 = useGallery(DIR14_2)
  const gallery6 = useGallery(DIR11)

  return (
    <>
      <h4>Mixed Beach Tournament. Submission Grappling. July, 2011</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        The tournament was held in two rounds on a beach, with each fight having no time limit. Four fighters
        participated
        in the official part of the tournament:
        <b> Tais</b> (5’7” / 130 lb) - a repeated winner of club tournaments in submission grappling and champion in
        kickboxing,
        karate, and sanda competitions,
        <b> Elena Vasilyeva</b> (5’6” / 135 lb) - a young and promising fighter from Namazon,
        <b> Alex</b> (5’9” / 154 lb), and
        <b> </b> (5’8” / 177 lb), both experienced male wrestlers in submission grappling competitions.
        Villian defeated Alex in both of their fights.
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
      <p>Villian wrestled Elena with some leniency, allowing her to showcase her attacking prowess.</p>
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
        Nevertheless, Villian ultimately won 2-0.
      </p>
      <p>
        Tais also secured victories over both Elena Vasilyeva and Alex. While Villian won all his fights by chokes, Tais
        utilized a variety of techniques including chokes, body scissors, neck scissors, and other joint locks.
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
        The outcome of the tournament was decided by the two matches between Villian and Tais. Villian won the first,
        Tais won the second, resulting in a draw for the top positions.
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
        The battle for the 3rd place between Elena Vasilyeva and Alex was particularly fierce. Their first fight lasted
        over 12 minutes, and the organizers regretted not dividing the fights into rounds. In the end, Elena won by a
        choke hold.
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
        Elena also won the second fight, securing the 3rd place with a 2-0 result.
      </p>
      <hr/>
      <p>
        Visit our store on <a href={LINK_SHOP_MAIN}>Patreon</a> to purchase the full video of Elena
        Vasilyeva's
        match against Alex (<b>VIDEO 11.</b> Alex vs. Elena Vasilyeva. Mixed Beach Wrestling. July, 2011), and also the
        full
        videos of three matches featuring Tais against men (<b>VIDEO 14.</b> Two Men Against One Woman. Mixed Wrestling.
        Part 1. 2011).
      </p>
    </>

  )
}