import sC from 'src/common/styles.module.scss'
import {Table} from "react-bootstrap"
import {useGallery} from "../../../common/hooks"
import {DIR_LIDA_VIKA, DIR_TAIS_YULIA, DIR_YAROSLAVA_VIKA} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/common"
import React from "react"

export const Tournament2013_3 = () => {
    const gallery1 = useGallery(DIR_YAROSLAVA_VIKA)
    const gallery2 = useGallery(DIR_LIDA_VIKA)
    const gallery3 = useGallery(DIR_TAIS_YULIA)
    const buttonText = 'See photos'

    return (
        <>
            <h4 className={sC.textAlignCenter}><u>Results of the second round (Semi-finals):</u></h4>
            <h5 className={sC.textAlignCenter}><u>MASHA Barsukova vs LIDA Oslopovskih</u></h5>
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
                    <td>MASHA Barsukova</td>
                    <td>124</td>
                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td><b>LIDA Oslopovskih</b></td>
                    <td>117</td>
                    <td>2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td><b>2</b></td>
                </tr>
                </tbody>
            </Table>
            <h5 className={sC.textAlignCenter}><u>YAROSLAVA Shuvalova vs VIKA Vardugina</u></h5>
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
                    <td>YAROSLAVA Shuvalova</td>
                    <td>124</td>
                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td><b>VIKA Vardugina</b></td>
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
                competition
            </p>
            <h4 className={sC.textAlignCenter}><u>Final</u></h4>
            <h5 className={sC.textAlignCenter}><u>LIDA Oslopovskih vs VIKA Vardugina</u></h5>
            <p>
                In the final, Lida and Vika faced each other on the mat. They were offered to wrestle a submission style
                match, even though they had never tried this kind of combat before. It turned out to be an extremely
                tough struggle between almost evenly matched opponents. In spite of her big weight advantage, Vika could
                not for a long time overcome Lida who didn’t give up and fought back proving herself a tough and smart
                wrestler.
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
            <p>Eventually <b>VIKA Vardugina</b> won the tournament, and <b>LIDA Oslopovskih</b> took the 2nd place.</p>
            <h4 className={sC.textAlignCenter}><u>Absolute division</u></h4>
            <p>
                Besides the three pairs of competitors in the amateur division there was created a special <b>absolute
                division</b> in which the opponents had to compete with each other in one round to determine a winner.
                One of the competitors in the absolute division was <b>Yulia Borovik</b> who, in view of her significant
                weight advantage over the other girls (she weighed 201 lb), was put against the most experienced
                wrestler in the Club, <b>Tais</b>.
            </p>
            <h5 className={sC.textAlignCenter}><u>YULIA Borovik vs TAIS</u></h5>
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
                    <td>YULIA Borovik</td>
                    <td>201</td>
                    <td>2</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td><b>TAIS</b></td>
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
                Powerful Yulia did not give Tais any chance in the tug of war fight. She expected to win the arm
                wrestling contest too, but to her disappointment, Tais’s arms turned out to be clearly stronger than
                hers. Then there was a hard struggle between the two ladies in the leg wrestling matches – Tais had a
                tough time, but she was able to tie the contest. So eventually the final winner between them had to be
                decided through a submission wrestling match that was scheduled for the last round of the tournament.
                That last match was pretty exciting and far from being one sided, because Yulia proved to be a very
                strong wrestler in terms of physical power. Tais got her hands full with that big and ambitious woman
                who did not want to lose to her much smaller and lighter opponent. It took Tais all her experience and
                wrestling skill to remain in the top position throughout the majority of the match and finally to bring
                Yulia to submission.
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
            <p><b>TAIS</b> won the 1st place in the absolute (open weight) division, <b>YULIA Borovik</b> took the 2nd.
            </p>
            <hr/>
            <p>
                You can see the both final wrestling matches, <b>VICTORIYA Vardugina</b> vs <b>LIDIYA
                Oslopovskih</b> and <b>TAIS</b> vs <b>YULIA Borovik</b>, in our movie (VIDEO 33) which is available for
                purchasing in our online store on <a href="https://gumroad.com/namazonclub">Gumroad</a>.
            </p>
        </>
    )
}