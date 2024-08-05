import mainImg from 'src/img/video/main/19main.jpg'
import mainImg2 from 'src/img/video/main/19main2.jpg'
import mainImg3 from 'src/img/video/19/01.jpg'
import mainImg4 from 'src/img/video/19/05.jpg'
import {MainImg} from "../../../common/MainImg"
import {NavLink} from "react-router-dom"
import {LINK_SHOP_MAIN} from "src/common/constants/shopLinks"

export const VarvaraTais2012 = () => {
  return (
    <>
      <h4>Varvara Akulova vs Tais. Submission grappling. May, 2012</h4>
      <MainImg imgMain={mainImg}/>
      <p>
        <b>Varvara Akulova</b> (born 1992, 5'9" / 165 lb) is a great athlete. As a child and teenager she was several
        times recognized as the strongest girl on the planet, which was twice confirmed by the Guinness Book of World
        Records. Varvara's strength results in the various periods of her life have been presented, for example, on
        the <a href="https://warnet.ws/2007/07/13/varvara-akulova-samaya-silnaya-devochka-na-planete-39-foto.html">official
        website of the St. Petersburg Athletic Center</a>. Look also <a
        href="https://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">here</a>.
      </p>
      <p>
        <a
          href="https://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">Today</a>, <b>Akulova</b> is
        an acting sportswoman, master of sports in weightlifting and in powerlifting. It is especially notable that she
        has achieved these results without the use of any steroids, which is very rare in the strength sports.
      </p>
      <p>
        <NavLink to="/girl/2012_2013/tais2012-2013">Tais</NavLink> is the leader of the Namazon Club. She
        specializes in wrestling
        and MMA. In this fight Varvara has a significant advantage in weight (about 15 kg / 33 lb) and in strength, but
        Tais is more experienced and technically skilled.
      </p>
      <MainImg imgMain={mainImg2}/>
      <MainImg imgMain={mainImg3}/>
      <MainImg imgMain={mainImg4}/>
      <p>
        The fight is fought in the grappling style. The intrigue of it is that nobody knows in advance who would win in
        the end. The principal question is WHICH will be better, the skill or pure strength.
      </p>
      <hr/>
      <p>
        It is really a hard fight! Clearly a big, strong Varvara does not want to lose to her smaller opponent. In turn,
        Tais would like nothing better than to beat the bigger and stronger athlete to demonstrate her skill and
        competitiveness. Who will prevail? Buy the video (<b><u>VIDEO 19.</u></b> Varvara Akulova vs Tais. Submission
        Grappling. May, 2012) on <a href={LINK_SHOP_MAIN}>Patreon</a> and find out.
      </p>
    </>
  )
}