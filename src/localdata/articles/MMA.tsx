import React from 'react'
import {Col, Row, Table} from "react-bootstrap"
import mma from 'src/img/main/mma.jpg'

export const MMA = () => {
    return (
        <>
            <Row>
                <Col>
                    <h3>MMA (Mixed Martial Arts) </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={2}><img src={mma} alt=""/></Col>
                <Col xl={10}>
                    <p><b>MMA</b> ((Mixed Martial Arts) is a full contact com-bat sport that allows the use of both
                        striking and grappling arts while both standing and on the ground, including wrestling,
                        Brazilian jiu-jitsu, sambo, judo, boxing, kickboxing, Muay Thai, karate and other styles. The
                        roots of mo-dern mixed martial arts can be traced back to the ancient Olympic combat sport of
                        Pankration. </p>
                    <p>MMA is often called fighting without rules. Actually, it's not quite correct. Though the rules in
                        MMA fights can be fairly tough, we follow some certain rules during the MMA competitions in our
                        Club. These rules are shown below.</p>
                </Col>
                <div className="col">
                    <h5><b>I. Weight classes</b></h5>
                    <p>The unified weight division system for women has not been designated yet. In our club we
                        designate limits for seven different weight classes:</p>
                    <Table bordered>
                        <tr>
                            <th scope="col">WEIGHT CLASS NAME</th>
                            <th scope="col">IN KILOGRAMS (kg)</th>
                            <th scope="col">IN POUNDS (lb)</th>
                        </tr>
                        <tr>
                            <td>FLYWEIGHT</td>
                            <td>45.4</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>BANTAMWEIGHT</td>
                            <td>48.5</td>
                            <td>107</td>
                        </tr>
                        <tr>
                            <td>FEATHERWEIGHT</td>
                            <td>52.2</td>
                            <td>115</td>
                        </tr>
                        <tr>
                            <td>LIGHTWEIGHT</td>
                            <td>56.7</td>
                            <td>125</td>
                        </tr>
                        <tr>
                            <td>WELTERWEIGHT</td>
                            <td>61.2</td>
                            <td>135</td>
                        </tr>
                        <tr>
                            <td>MIDDLEWEIGHT</td>
                            <td>65.8</td>
                            <td>145</td>
                        </tr>
                        <tr>
                            <td>LIGHT HEAVYWEIGHT</td>
                            <td>72.5</td>
                            <td>160</td>
                        </tr>
                    </Table>
                    <h5><b>II. Legal techniques:</b></h5>
                    <ul>
                        <li>all punches and kicks;</li>
                        <li>all chokes(no direct attack to the trachea);</li>
                        <li>all joint locks;</li>
                        <li>all knee bars and heel hooks;</li>
                        <li>all takedowns, throws, foot sweeps... .</li>
                    </ul>
                    <h5><b>III. Illegal techniques:</b></h5>
                    <ul>
                        <li>eye gouging of any kind;</li>
                        <li>biting or spitting at an opponent;</li>
                        <li>butting with the head;</li>
                        <li>hair pulling;</li>
                        <li>fish hooking;</li>
                        <li>groin attacks of any kind;</li>
                        <li>holding or grabbing the fence;</li>
                        <li>holding opponent’s attire or gloves;</li>
                        <li>intentionally placing a finger into any orifice, or into any cut or laceration of your
                            opponent;
                        </li>
                        <li>downward pointing of elbow strikes;</li>
                        <li>small joint manipulation (control of three or more fingers/toes is necessary);</li>
                        <li>strikes to the spine or back of the head;</li>
                        <li>heel kicks to the kidney;</li>
                        <li>throat strikes of any kind, including, without limitation, grabbing the trachea.;</li>
                        <li>clawing, pinching, twisting the flesh or grabbing the clavicle;</li>
                        <li>the use of abusive language in fighting area;</li>
                        <li>any unsportsmanlike conduct that causes an injury to opponent;</li>
                        <li>attacking an opponent on or during the break;</li>
                        <li>attacking an opponent who is under the care of the referee;</li>
                        <li>timidity (avoiding contact, or consistent dropping of mouthpiece, or faking an injury);</li>
                        <li>interference from a mixed martial artists seconds;</li>
                        <li>throwing an opponent out of the ring or caged area;</li>
                        <li>flagrant disregard of the referee’s instructions;</li>
                        <li>attacking an opponent after the bell has sounded the end of the period of unarmed combat.
                        </li>
                    </ul>
                    <h5><b>IV. Penalties:</b></h5>
                    <ul>
                        <li>any techniques from article IV;</li>
                        <li>fleeing the mat;</li>
                        <li>when a competitor backs away from the action (i.e. away from takedowns and/or away from the
                            ground).
                        </li>
                    </ul>
                    <h5><b>V. Ways to victory:</b></h5>
                    <h6><b>Knockout (KO)</b></h6>
                    <p>KO is as soon as a fighter becomes unconscious due to strikes, his opponent is declared the
                        winner. As MMA rules allow ground fighting, the fight is stopped to prevent further injury to an
                        unconscious fighter.</p>
                    <h6><b>Technical Knockout (TKO)</b></h6>
                    <u>Referee Stoppage</u>
                    <p>The referee may stop a match in progress if:</p>
                    <ul>
                        <li>a fighter becomes dominant to the point where the opponent is unable to intelligently defend
                            himself from attacks, which may occur as quickly as a few seconds;;
                        </li>
                        <li>a fighter appears to have developed a severe injury: the referee will call for a time out if
                            a fighter's ability to continue is in question as a result of apparent injuries, such as a
                            large cut. The ring doctor will inspect the fighter and stop the match if the fighter is
                            deemed unable to continue safely, rendering the opponent the winner. However, if the match
                            is stopped as a result of an injury from illegal actions by the opponent, either a
                            disqualification or no contest will be issued instead.
                        </li>
                    </ul>
                    <u>Corner Stoppage </u>
                    <p> A fighter's corner men may announce defeat on the fighter's behalf by throwing in the towel
                        during the match in progress or between rounds.</p>
                    <u> Retirement </u>
                    <p> If a fighter feels unable to continue after the conclusion of a round, s/he may inform or have
                        the corner inform the referee that s/he forfeits the match to his opponent. </p>
                    <h6><b>Submission</b></h6>
                    <p>A fighter may admit defeat during a match by: </p>
                    <ul>
                        <li>a tap on the opponent's body;</li>
                        <li>a tap on the mat or floor;</li>
                        <li>verbal announcement.</li>
                    </ul>
                    <h6><b>Technical Submission</b></h6>
                    <p>
                        A referee may intervene and call a stop to the contest when:<br/>
                        - a fighter appears to be unconscious from a grappling hold;<br/>
                        - a fighter appears to have suffered a serious injury from a grappling hold.
                    </p>
                    <h6><b>Decision</b></h6>
                    <p>If the match goes the distance, then the outcome of the bout is determined by three judges. The
                        judging criteria are organization-specific: </p>
                    <u>Unanimous Decision </u>
                    <p>If all three judges on the panel score a bout unanimously in favor of one fighter. </p>
                    <u>Split Decision </u>
                    <p>If two judges on the panel score a bout in favor of one fighter, with one judge scoring the bout
                        in favor of the other. </p>
                    <u>Majority Decision </u>
                    <p>If two judges on the panel score a bout in favor of one fighter, with one judge scoring the bout
                        a draw. </p>
                    <u>Draw </u>
                    <p>If all three judges on the panel score a bout unanimously in favor of neither fighter. </p>
                    <u>Split Draw</u>
                    <p> If one judge on the panel score a bout in favor of one fighter, the second in favor of his
                        opponent, and the third in favor of neither fighter. </p>
                    <u>Majority Draw </u>
                    <p> If two judges score the bout a draw, with one judge scoring the bout in favor of one
                        fighter. </p>
                    <h6><b>Technical Decision</b></h6>
                    <p>If a fighter behind or even on points commits an intentional foul during the course of the match,
                        and the opponent is unable to continue due to the injury or injuries inflicted by the foul at
                        any subsequent point in the fight, the match is stopped and awarded to injured fighter. </p>
                    <h6><b>Technical Draw</b></h6>
                    <p>If a fighter <b>ahead on points</b> commits an intentional foul during the course of the match,
                        and the opponent is unable to continue due to the injury or injuries inflicted by the foul at
                        any subsequent point in the fight, the match is stopped and is awarded a draw.</p>
                    <h6><b>Forfeit</b></h6>
                    <p>A fighter or his representative may forfeit a match prior to the beginning of the match, thereby
                        losing the match.</p>
                    <h6><b>Disqualification</b></h6>
                    <p>A "warning" will be given when a fighter commits a foul or illegal action or does not follow the
                        referee's instruction. Three warnings will result in a disqualification. Moreover, if a fighter
                        is injured and unable to continue due to a deliberate illegal technique from his opponent, the
                        opponent will be disqualified.</p>
                    <h6><b>No Contest</b></h6>
                    <p>In the event that both fighters commit a violation of the rules, or a fighter is unable to
                        continue due to an injury from an accidental illegal technique, the match will be declared a "No
                        Contest".</p>
                    <h5><b>VI. Attire</b></h5>
                    <p>It is allowed to fighters latitude in their choice of attire but open finger gloves, a mouthguard
                        and a protective cup are mandatory. It is within a fighter's discretion to tape parts of their
                        body but you can not wear a gi top, gi pants, wrestling shoes, kneepads, elbow pads, shin guards
                        or ankle supports.</p>
                    <h5><b>VII. Rounds</b></h5>
                    <p>Uses three 5-minute rounds. There is a two minute rest period between each round.</p>
                </div>
            </Row>
        </>
    )
}