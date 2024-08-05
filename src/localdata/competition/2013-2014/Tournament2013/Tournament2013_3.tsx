import sC from 'src/common/styles.module.scss'
import {Table} from "react-bootstrap"
import {useGallery} from "../../../../common/hooks"
import {DIR_LIDA_VIKA, DIR_TAIS_YULIA, DIR_YAROSLAVA_VIKA} from "../../../../common/ImageContexts"
import React from "react"
import {ButtonGallery} from "../../../../common/ButtonGallery/ButtonGallery"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

export const Tournament2013_3 = () => {
  const gallery1 = useGallery(DIR_YAROSLAVA_VIKA)
  const gallery2 = useGallery(DIR_LIDA_VIKA)
  const gallery3 = useGallery(DIR_TAIS_YULIA)
  const buttonText = 'See photos'

  return (
    <>
      <h4 className={sC.textAlignCenter}><u>Results of the Second Round (Semi-finals):</u></h4>
      <h5 className={sC.textAlignCenter}><u>Masha Barsukova vs Lida Oslopovskih</u></h5>
      <Table bordered>
        <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Masha Barsukova</td>
          <td>124</td>
          <td>0</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td><b>Lida Oslopovskih</b></td>
          <td>117</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><b>2</b></td>
        </tr>
        </tbody>
      </Table>
      <h5 className={sC.textAlignCenter}><u>Yaroslava Shuvalova vs Vika Vardugina</u></h5>
      <Table bordered>
        <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Yaroslava Shuvalova</td>
          <td>124</td>
          <td>0</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td><b>Vika Vardugina</b></td>
          <td>152</td>
          <td>2</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td><b>2</b></td>
        </tr>
        </tbody>
      </Table>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={buttonText}
      />
      <p>
        The semi-final results show that <b>Vika</b> had an obvious advantage over <b>Yaroslava</b>, just
        like <b>Lida</b> did over <b>Masha</b>. They both (Vika and Lida) moved on to the final round of the
        competition.
      </p>
      <h4 className={sC.textAlignCenter}><u>Final</u></h4>
      <h5 className={sC.textAlignCenter}><u>Lida Oslopovskih vs Vika Vardugina</u></h5>
      <p>
        In the final, Lida and Vika faced each other on the mat. They were offered to wrestle a submission-style match,
        even though they had never tried this kind of combat before. It turned out to be an extremely tough struggle
        between almost evenly matched opponents. In spite of her big weight advantage, Vika could not for a long time
        overcome Lida who didn’t give up and fought back proving herself a tough and smart wrestler.
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
      <p>Eventually <b>Vika Vardugina</b> won the tournament, and <b>Lida Oslopovskih</b> took the 2nd place.</p>
      <h4 className={sC.textAlignCenter}><u>Absolute Division</u></h4>
      <p>
        Besides the three pairs of competitors in the amateur division, there was created a special <b>absolute
        division</b> in which the opponents had to compete with each other in one round to determine a winner. One of
        the competitors in the absolute division was <b>Yulia Borovik</b> who, in view of her significant weight
        advantage over the other girls (she weighed 201 lb), was put against the most experienced wrestler in the
        Club, <b>Tais</b>.
      </p>
      <h5 className={sC.textAlignCenter}><u>Yulia Borovik vs Tais</u></h5>
      <Table bordered>
        <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Yulia Borovik</td>
          <td>201</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
          <td><b>Tais</b></td>
          <td>133</td>
          <td>0</td>
          <td>2</td>
          <td>1</td>
          <td>2</td>
          <td><b>5</b></td>
        </tr>
        </tbody>
      </Table>
      <p>
        Powerful Yulia dominated the tug of war, leaving Tais no chance to compete. She anticipated victory in the arm
        wrestling contest as well, only to be disappointed by Tais’s unexpectedly superior strength in their arms. The
        leg wrestling match was a hard-fought struggle between the two women – Tais faced difficulties but managed to
        deadlock the contest. Consequently, their final winner was determined through a submission wrestling match
        scheduled for the tournament’s last round. This match proved thrilling and far from one-sided; Yulia showcased
        her formidable physical prowess as a wrestler. Tais, confronted with the challenge of overcoming Yulia, a much
        larger and determined opponent, relied on her extensive experience and wrestling skills to maintain dominance
        throughout most of the match, eventually forcing Yulia into submission.
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
      <p><b>Tais</b> won the 1st place in the absolute (open weight) division, <b>Yulia Borovik</b> took the 2nd.</p>
      <hr/>
      <p>
        You can see both final wrestling matches, <b>Victoriya Vardugina</b> vs <b>Lidiya
        Oslopovskih</b> and <b>Tais</b> vs <b>Yulia Borovik</b>, in our movie (VIDEO 33) which is available for
        purchasing in our online store on <a href={LINK_SHOP_MAIN}>Patreon</a>.
      </p>
    </>
  )
}