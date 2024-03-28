import imgMain from "../../../img/competitions/2013_2014/silovye_edinoborstva_2013/yaroslava-masha/08.jpg"
import {MainImg} from "../../../common/MainImg"
import React, {useState} from "react"
import {PageSelector} from "./PageSelector/PageSelector"

export const Tournament2013Main = () => {
    const [pageValue, setPageValue] = useState(1)

    return (
        <>
            <h4>Women's Power Event Tournament. October, 2013</h4>
            <PageSelector activePage={pageValue} setActivePage={setPageValue}/>
            <MainImg imgMain={imgMain}/>
            <p>
                The female power combat tournament was organized in cooperation with the Female Single Combat Club
                "Namazon" and the St. Petersburg Athletic Center. The full title of the competition was <b>"The female
                single combat tournament for the prizes of the SBR Athletic Center and the Namazon Club"</b>. The aim of
                the competition was to popularize non-traditional power single combats between women.
            </p>
            <p>
                Actually, the tournament was made as a crossfit competition consisting of the following events:
            </p>
            <ul>
                <li>Tug-of-war (a win is awarded with 2 points);</li>
                <li>Arm wrestling on the floor i) with both left and right arms (a win with either arm is awarded with 1
                    point);
                </li>
                <li>Leg wrestling ii) – wrestling with legs in sitting position (a win in each of the 2 positions is
                    awarded with 1 point);
                </li>
                <li>"Sumo-wrestling" iii) with simplified rules (a win is awarded with 2 points).</li>
            </ul>
            <p>
                The competition format was made up of the competitors who’d been expected to participate in the
                tournament. The trouble was that we didn’t exactly know, until the last day, which girls would compete.
                It was supposed that after the check-in process the competitors would be divided into pairs, according
                to their weight and training level.<br/>
                Eventually, in October 2, 2013, the pairs of girls, who had to do 3 qualification rounds to determine a
                winner in the amateur division, were formed as follows:
            </p>
            <h5>
                <u>Lisa Sergovskaya vs Lida Oslopovskih</u>
            </h5>
            <p>
                <b>Lisa Sergovskaya</b> has been involved in arm wrestling for more than a year, and before that she was
                engaged in rock-climbing. Lisa is 18 years old; she is a student. In summer 2013, she took part in a
                photo session at the SBR Athletic Center. Her weight is 126 lb (57 kg).<br/>
                <b>Lida Oslopovskih</b> is not engaged in any kind of sports but she attends a fitness center, and has
                made a successful debut in combined heaving events; especially strong is she in push-ups (she is able to
                push up 20 times on parallel bars). Lida is 27 years old; her weight is 117 lb (53 kg).
            </p>
            <h5><u>Darina Chupahina vs Vika Vardugina</u></h5>
            <p>
                <b>Darina Chupahina</b> — the only info about her is that she works as a coach in a fitness center.
                Darina is 20 years old.<br/>
                <b>Vika Vardugina</b>— in summer 2013, she competed for the first time at a college arm wrestling
                tournament, and won the 1st place in her weight class. She currently attends a fitness center. Vika came
                from Kazakhstan; she is a student and is 18 years old.
            </p>
            <h5><u>Masha Barsukova vs Yaroslava Shuvalova</u></h5>
            <p>
                <b>Masha Barsukova</b> trains in a fitness center; she is a participant of a number of amateur power
                sports events; one of her best results is 4 minutes of static squats against the wall. Masha is 26 years
                old and weighs 124 lb (56 kg).<br/>
                <b>Yaroslava Shuvalova</b> is a photographer, and is far from playing sports and exercising in fitness.
                But having tried her hand in non-professional combined power competitions, she surprisingly fared well
                lifting weights — she squatted 56 lb (25 kg) for 60 reps. Yaroslava is 45 years old and weighs 124 lb
                (56 kg).
            </p>
            <hr/>
            <p>i) In order to reduce to a minimum the possible technical advantage of the opponent more experienced in
                arm-wrestling at a table, the girls wrestled down on the floor where the decisive factor is usually the
                physical power of the wrestler rather than his technical superiority.</p>
            <p>ii) The goal of the wrestler is to use the strength of her thighs to squeeze together the opponent’s
                knees, while the opponent tries to spread them apart, then they exchange positions.</p>
            <p>iii) This kind of combat is also referred to as "Mercy" wrestling. The goal of the wrestler is to push
                the opponent outside the boundaries of the carpet or make her touch the ground with any part of the body
                (touching the ground with one knee is allowed).</p>
        </>
    )
}