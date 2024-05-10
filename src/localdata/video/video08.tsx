import React from 'react'
import mainImg from 'src/img/video/main/08main.jpg'

import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {MainImg} from "../../common/MainImg"
import {useGallery} from "../../common/hooks"
import {DIR08_1, DIR08_2, DIR08_3} from "../../common/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "../../common/constants"

export const Video08 = () => {
  const videoNumber = 8

  const gallery1 = useGallery(DIR08_1)
  const gallery2 = useGallery(DIR08_2)
  const gallery3 = useGallery(DIR08_3)

  return (
    <>
      <h3>VIDEO {videoNumber}</h3>
      <h4>Beach Tournament. Submission Grappling. June, 2011</h4>
      <p>
        Two new girls - <b>Elena Vasilyeva</b> (5'6" / 135 lb) and <b>Irina (Vlasta)</b> (5’9’’ / 154 lb) - took
        part in the beach wrestling tournament alongside with <b>Tais</b> (5’7” / 130 lb). Elena is specialized
        in submission grappling, judo and armwrestling and Irina in submission grappling, muay thai and pole
        dancing.<br/>
        The tournament was held in two rounds. The fights had no time limit. Especially tough and hard was the
        struggle for the 2nd place between the newcomers. Young and skilled Elena fought bravely against older
        Irina.
      </p>
      <MainImg imgMain={mainImg}/>
      <p>If you like female wrestling not only indoors, but under the open sky as well, this film will suit you.</p>
      <h5>Elena Vasilyeva vs Tais</h5>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <h5>Irina (Vlasta) vs Tais</h5>
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
        buttonName={COMPETITIONS_BUTTON_TEXT}
      />
      <h5>Elena Vasilyeva vs Irina (Vlasta)</h5>
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
      <p>You can buy <b>VIDEO {videoNumber}</b> on <a href="https://gumroad.com/namazonclub">Gumroad</a>.</p>
    </>
  )
}