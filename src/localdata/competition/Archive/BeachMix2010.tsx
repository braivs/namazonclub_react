import mainImg from 'src/img/video/03mix/wm1/12.jpg'
import {MainImg} from "../../../common/MainImg"
import React from "react"
import {useGallery} from "../../../common/hooks"
import {DIR03_1, DIR03_2, DIR03_3} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "../../../common/constants/constants"
import {LINK_SHOP_MAIN} from "../../../common/constants/shopLinks"

export const BeachMix2010 = () => {
  const gallery1 = useGallery(DIR03_1) // Natalia Mysik  vs  Alex
  const gallery2 = useGallery(DIR03_2) // Alex  vs  Tais
  const gallery3 = useGallery(DIR03_3) // Natalia Mysik vs Tais

  return (
    <>
      <h4>Two girls vs one man. 2010</h4>
      <MainImg imgMain={mainImg} />
      <p>
        <b>Alex</b> (5’9” / 150 lb) faced off against two regular members of the Namazon Club: <b>Natalia Mysik</b> (5’11” / 154 lb) and <b>Tais</b> (5’7” / 132 lb). The competition unfolded in two rounds without a specific time limit for each fight. Matches continued until one opponent could no longer continue and admitted defeat, typically through joint locks or chokes.
      </p>
      <h5>Alex vs Natalia Mysik</h5>
      <p>
        Natalia Mysik initially underestimated Alex, who quickly gained the upper hand by bringing her down on the sand and submitting her. This unexpected defeat spurred Natalia into a more aggressive approach in the next two rounds. She decisively pinned Alex down with her superior strength and immobilized him on the sand, securing two consecutive victories.
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
        Tais, on the other hand, dominated Alex completely. She consistently forced him into submission with effective choke holds and armlocks, winning all three fights decisively.
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
        The matches between Natalia Mysik and Tais were intense and dramatic. Both fighters had moments of advantage, with the momentum swinging back and forth. Despite Tais making occasional mistakes, Natalia couldn't capitalize on them in the first two rounds. However, as fatigue set in, Tais secured a quick submission victory in the final round with a pin combined with an armbar.
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
        Ultimately, Tais emerged as the tournament winner, with Natalia Mysik taking second place and Alex finishing third.
      </p>
      <hr />
      <p>
        The full video of the beach mixed wrestling round-robin tournament featuring Natalia Mysik, Tais, and Alex (<b>VIDEO 3.</b> Beach Submission Grappling. Two girls vs one man) is available for purchase on our online store at <a href={LINK_SHOP_MAIN}>Patreon</a>.
      </p>
    </>
  )
}