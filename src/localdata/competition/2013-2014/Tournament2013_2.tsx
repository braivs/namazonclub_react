import React from "react"
import {Table} from "react-bootstrap"
import sC from 'src/common/styles.module.scss'
import {useGallery} from "../../../common/hooks"
import {DirDarinaViktoria, DirYaroslavaMasha} from "../../../common/ImageContexts"
import {ButtonGallery} from "../../../common/common"

export const Tournament2013_2 = () => {
    const gallery1 = useGallery(DirDarinaViktoria)
    const gallery2 = useGallery(DirYaroslavaMasha)
    const buttonText = 'See photos'

    return (
        <>
            <h4 className={sC.textAlignCenter}><u>Results of the first round (Quarter-finals):</u></h4>
            <h5 className={sC.textAlignCenter}><u>LISA Sergovskaya vs LIDA Oslopovskih</u></h5>
            <Table bordered className={sC.customTablePadding}>
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
                    <td>LISA Sergovskaya</td>
                    <td>127</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><b>LIDA Oslopovskih</b></td>
                    <td>117</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td><b>6</b></td>
                </tr>
                </tbody>
            </Table>
            <p>In the first pair, a significant advantage was on the side of Lida who was, among other things, more
                spirited to win the contest.</p>
            <h5 className={sC.textAlignCenter}><u>DARINA Chupahina vs VIKA Vardugina</u></h5>
            <Table bordered className={sC.customTablePadding}>
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
                    <td>DARINA Chupahina</td>
                    <td>141</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td><b>VIKA Vardugina</b></td>
                    <td>152</td>
                    <td>2</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2</td>
                    <td><b>7</b></td>
                </tr>
                </tbody>
            </Table>
            <p>
                In the second pair, the advantage of <b>Vika</b> was evident..
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
            <h5 className="text-center"><u>YAROSLAVA Shuvalova vs MASHA Barsukova</u></h5>
            <Table bordered className={sC.customTablePadding}>
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
                    <td><b>ЯРОСЛАВА Шувалова</b></td>
                    <td>124</td>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>0</td>
                    <td><b>4</b></td>
                </tr>
                <tr>
                    <td><b>МАША Барсукова</b></td>
                    <td>124</td>
                    <td>0</td>
                    <td>1</td>
                    <td>1</td>
                    <td>2</td>
                    <td><b>4</b></td>
                </tr>
                </tbody>
            </Table>
            <p>
                The struggle in the third pair was very tough, the opponents almost evenly matched. Yaroslava is
                naturally stronger than Masha, but Masha is better trained, more skilled and cunning. The result was <b>a
                draw by 4-4</b>.
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
            <p>
                The winners of the first two pairs and the both contestants of the third pair entered the semi-finals
                where they had to compete with each other only in one competition event, tug of war.
            </p>
        </>
    )
}