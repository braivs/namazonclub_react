import React from 'react'
import {Col, Row, Table} from "react-bootstrap"
import sg from 'src/img/main/sg.jpg'

export const Submission = () => {
    return (
        <>
            <Row>
                <Col>
                    <h3>Submission Grappling (Wrestling) as Single Combat </h3>
                </Col>
            </Row>
            <Row>
                <Col xl={2}>
                    <img src={sg} alt=""/>
                </Col>
                <Col xl={10}>
                    <p><b>Submission grappling</b> (Submission wrestling) is a non-striking hybrid style formed of
                        wrestling, jiu jitsu, sambo, and many other submission fighting styles which consists in
                        applying submission holds and choking tech-niques in order to make the opponent aban-don the
                        fight. Submission grappling plays an important role in the practice of <b>Mixed Martial Arts
                            (MMA)</b> and is considered an effective form of <b>self-defense</b>.</p>
                    <p><b>ISWA</b> - International Submission Wrestling Association.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5><b>RULES</b></h5>
                    <p>Rules can differ a little from tournament to tournament. As an example we shall result key points
                        of rules <b>Professional Submission Leagu (PSL)</b></p>
                    <h5><b>I. Time limits</b></h5>
                    <p>
                        Each match consists of two rounds (four minutes in duration) with a 30 second break.<br/>
                        If match is declared a draw after regulation time ( 2 x 4 minute rounds) then match will
                        continue with two minute sudden death overtime.
                    </p>
                    <h5><b>II. Points:</b></h5>
                    <p>Points will be awarded for the following positions: </p>
                    <ul>
                        <li>takedown (knees, stomach or back on the mat for 1 second) - 1 point;</li>
                        <li>mount held for 3 seconds - 1 point ;</li>
                        <li>back mount held for 3 seconds (with hooks or body triangle) - 1 point;</li>
                        <li>catch (near submission) - 3 points.</li>
                    </ul>
                    <h5><b>III. Legal techniques:</b></h5>
                    <ul>
                        <li>all joint locks;</li>
                        <li>all chokes;</li>
                        <li>all knee bars and heel hooks;</li>
                        <li>all takedowns, throws, foot sweeps... .</li>
                    </ul>
                    <h5><b>IV. Illegal techniques:</b></h5>
                    <ul>
                        <li>small joint manipulations;</li>
                        <li>direct attack to the trachea;</li>
                        <li>striking of any kind;</li>
                        <li>eye gouging, fish hooking;</li>
                        <li>biting or spitting at an opponent;</li>
                        <li>clawing, pinching, twisting the flesh or grabbing the clavicle;</li>
                        <li>hair pulling;</li>
                        <li>grabbing of clothing;</li>
                        <li>grease or oil on the body;</li>
                        <li>chin in opponents face, no thumbing, pinching, scratching ... ;</li>
                        <li>attacking opponents groin area;</li>
                        <li>spiking opponents head on the mat.</li>
                    </ul>
                    <h5><b>Penalties:</b></h5>
                    <ul>
                        <li>any techniques from article IV;</li>
                        <li>fleeing the mat;</li>
                        <li>when a competitor backs away from the action (i.e. away from takedowns and/or away from the
                            ground).
                        </li>
                    </ul>
                    <p>Committing any of these penalties results in a stalling penalty/yellow card,three penalties will
                        result in a red card/disqualification.</p>
                    <h5><b>VI. Uniform:</b></h5>
                    <ul>
                        <li>competitors shall be bare footed;</li>
                        <li>any tape, knee pads, knee sleeves, anklets... must be apporved by PSL training staff;</li>
                        <li>competitors shall have a dark uniform and a light uniform ready for the PSL event
                            competitors shall wear appropriate shorts; undergarments to be approved by PSL officials.
                        </li>
                    </ul>
                    <h5><b>VII. Winning the match:</b></h5>
                    <p>A match is won when:</p>
                    <ul>
                        <li>opponent taps the mat, your body...;</li>
                        <li>opponent verbally submits to the PSL official;</li>
                        <li>the PSL official feels that if your opponent is unable to continue;</li>
                        <li>opponent fails to continue match after any round, slam or submission attempt (15 sec count
                            out rule);
                        </li>
                        <li>a PSL official declairs the competitor the winner by points.</li>
                    </ul>
                    <h5><b>VIII. Weighings:</b></h5>
                    <ul>
                        <li>all competitors must be present at the official weighings;</li>
                        <li>if competitor has failed to make the weight stated in the LA SUB X Wrestling Agreement, he /
                            she has two hours from the end of the official PSL weigh in to do so;
                        </li>
                        <li>if competitor misses weight, he shall be fined 25% of his show money and any travel expenses
                            incurred by PSL.
                        </li>
                    </ul>
                    <Table bordered>
                        <tr>
                            <th scope="col">OFFICIAL PSL WEIGHT DIVISIONS</th>
                            <th scope="col">WEIGHT-MEN-WOMEN UPPER LIMIT</th>
                        </tr>
                        <tr>
                            <td>STRAWWEIGHT</td>
                            <td>110 lb / 50 kg</td>
                        </tr>
                        <tr>
                            <td>FLYWEIGHT</td>
                            <td>130 lb / 59 kg</td>
                        </tr>
                        <tr>
                            <td>FEATHERWEIGHT</td>
                            <td>145 lb / 66 kg</td>
                        </tr>
                        <tr>
                            <td>LIGHTWEIGHT</td>
                            <td>155 lb / 70 kg</td>
                        </tr>
                        <tr>
                            <td>WELTERWEIGHT</td>
                            <td>170 lb / 77 kg</td>
                        </tr>
                        <tr>
                            <td>MIDDLEWEIGHT</td>
                            <td>185 lb / 84 kg</td>
                        </tr>
                        <tr>
                            <td>LIGHT HEAVYWEIGHT</td>
                            <td>200 lb / 91 kg</td>
                        </tr>
                        <tr>
                            <td>CRUISER WEIGHT</td>
                            <td>215 lb / 98 kg</td>
                        </tr>
                        <tr>
                            <td>HEAVYWEIGHT</td>
                            <td>UNLIMITED</td>
                        </tr>
                        <tr>
                            <td>ABSOLUTE</td>
                            <td>NONE</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
        </>
    )
}