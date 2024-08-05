import React, {useState} from 'react'
import imgMain from 'src/img/girl/kara-teller/k01.jpg'
import imgMain2 from 'src/img/video/09/mma-rozhdestvenskij-kubok-2012-1/01.jpg'
import imgMain3 from 'src/img/video/17/mma-kara-svetlany-2012-1/01.jpg'
import imgMain4 from 'src/img/girl/kara-teller/mma-sportivnyj-prazdnik-2012-1/01.jpg'
import imgMain5 from 'src/img/video/17/mma-kara-svetlany-2012-3/9.jpg'
import sC from "../../common/styles.module.scss"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {NavLink} from "react-router-dom"
import {Col} from "react-bootstrap"
import cn from "classnames"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"
import {LINK_SHOP_MAIN} from "../../common/constants/shopLinks"

const images = require.context('src/img/girl/kara-teller/', false)
const images2 = require.context('src/img/video/09/mma-rozhdestvenskij-kubok-2012-1', false)
const images4 = require.context('src/img/video/17/mma-kara-svetlany-2012-1', false)
const images5 = require.context('src/img/girl/kara-teller/mma-sportivnyj-prazdnik-2012-1', false)
const images6 = require.context('src/img/video/17/mma-kara-svetlany-2012-3', false)

export const KaraTeller = () => {
  const [index, setIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  const photos = getGalleryPhotosFromRequire(images, 330, 220)
  const slides = getSlides(photos)

  const [index2, setIndex2] = useState(-1)
  const [open2, setOpen2] = useState(false)
  const photos2 = getGalleryPhotosFromRequire(images2)
  const slides2 = getSlides(photos2)

  const [index4, setIndex4] = useState(-1)
  const [open4, setOpen4] = useState(false)
  const photos4 = getGalleryPhotosFromRequire(images4)
  const slides4 = getSlides(photos4)

  const [index5, setIndex5] = useState(-1)
  const [open5, setOpen5] = useState(false)
  const photos5 = getGalleryPhotosFromRequire(images5)
  const slides5 = getSlides(photos5)

  const [index6, setIndex6] = useState(-1)
  const [open6, setOpen6] = useState(false)
  const photos6 = getGalleryPhotosFromRequire(images6)
  const slides6 = getSlides(photos6)

  const buttonText = 'Other photos'


  return (
    <>
      <h4>Kara Teller</h4>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
      </Col>
      <ButtonGallery
        index={index}
        indexCallback={setIndex}
        isOpen={open}
        openCloseCallback={setOpen}
        photos={photos}
        slides={slides}
        buttonName={buttonText}
      />
      <p>
        <b>Kara Teller</b> (the Vityaz Club, Moscow) is a very tender, feminine girl in daily life and a tough, brave,
        stubborn fighter on a wrestling mat and in a ring. She specializes in karate, sambo, MMA, and hand-to-hand
        combat known as street fighting. At 5'7" and weighing 121 lb, she fears nobody and valiantly fights against
        heavier and stronger opponents. At the Namazon Club, she mainly participated in MMA fights.
      </p>
      <h4><u>Kara Teller in MMA fights</u></h4>
      <h4>Kara vs Elena Vasilyeva. Christmas Cup 2012</h4>
      <img className={sC.videosMainImg} src={imgMain2} alt="imgMain2"/>
      <p>
        This was an intense fight with numerous punches, kicks, throws, and ground wrestling. The match had three
        four-minute rounds with four-minute breaks between each round. <NavLink
        to="/girl/2012_2013/elena-vasileva2013">Elena</NavLink> (St. Petersburg, 5'6" / 132 lb) dominated the
        first two rounds, giving Kara a very hard time.
      </p>
      <ButtonGallery
        index={index2}
        indexCallback={setIndex2}
        isOpen={open2}
        openCloseCallback={setOpen2}
        photos={photos2}
        slides={slides2}
        buttonName={buttonText}
      />
      <p>
        In the third round, it became clear that Elena was getting tired. Kara managed to gain control of the fight due
        to her combative spirit and eventually won by applying a choke hold. It was a very hard and dramatic fight,
        perhaps one of the best we've ever had at the Club.
      </p>
      <h4>Kara vs Svetlana Solovyova. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain3} alt="imgMain3"/>
      <p>
        <b>Svetlana Solovyova</b> (St. Petersburg, 5'7" / 124 lb) was clearly superior to Kara in physical power. For
        example, her hand grip strength was measured at 56.3 kg (124 lb), more than her own weight! However, Kara’s
        fighting experience compensated for her lack of strength during their fight.
      </p>
      <p>
        Initially, Svetlana could withstand Kara's attacks during their stand-up exchanges, but when the fight went to
        the ground, Kara's advantage became evident. Kara won by a choke hold in 1:13.
      </p>
      <ButtonGallery
        index={index4}
        indexCallback={setIndex4}
        isOpen={open4}
        openCloseCallback={setOpen4}
        photos={photos4}
        slides={slides4}
        buttonName={buttonText}
      />
      <h4>Kara vs Darya Balina. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain4} alt="imgMain"/>
      <p>
        Kara was the favorite to win this fight against <NavLink to="/girl/2012_2013/darya-balina">Darya
        Balina</NavLink> (the female self-defense Club "Panther", St. Petersburg, 5'4" / 124 lb). While Darya had good
        kickboxing skills, she was less confident in wrestling due to her combat training focus on self-defense. The
        fight format was three four-minute rounds with one-minute rest periods between them.
      </p>
      <ButtonGallery
        index={index5}
        indexCallback={setIndex5}
        isOpen={open5}
        openCloseCallback={setOpen5}
        photos={photos5}
        slides={slides5}
        buttonName={buttonText}
      />
      <p>
        It took Kara only two rounds to secure victory. The first round was fought in stand-up, with Kara showing
        superior striking. In the second round, the fight went to the ground where Kara again took advantage and
        finished Darya with a choke hold, a method that has become Kara's trademark.
      </p>
      <h4><u>Kara Teller in Submission Grappling Fights</u></h4>
      <h4>Kara vs Svetlana Solovyova. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain5} alt="imgMain"/>
      <p>
        The girls had two fights with each other. The first was a short MMA fight lasting just over a minute. Afterward,
        they decided to test their strengths again under submission grappling rules, with a set time limit.
      </p>
      <ButtonGallery
        index={index6}
        indexCallback={setIndex6}
        isOpen={open6}
        openCloseCallback={setOpen6}
        photos={photos6}
        slides={slides6}
        buttonName={buttonText}
      />
      <p>
        Both were in the same weight class, making their contest interesting and intriguing. Svetlana (St. Petersburg,
        5'7" / 124 lb) was physically more powerful and spent most of the fight on top of Kara. Kara, on her back, used
        a head scissors in defense and struggled to control Svetlana’s arm from the bottom, attempting a submission
        hold. However, neither could secure a victory within the time limit. Svetlana's lack of wrestling skill and
        Kara’s insufficient strength for a successful counterattack led to a <b>draw</b>.
      </p>
      <h4><u>Results for 2012 MMA Tournaments</u></h4>
      <p>Win-loss-draw record: 4:3:0 (as of July 1, 2012)</p>
      <hr/>
      <p>
        In our store on <a href={LINK_SHOP_MAIN}>Patreon</a>, you can purchase full videos of Kara’s
        MMA fights held at the Namazon Club (Videos 9, 17, 18, and 20).
      </p>
    </>
  )
}

//todo: Fix, maybe images2 & images3 & etc. is duplications, possible to take it from videos.