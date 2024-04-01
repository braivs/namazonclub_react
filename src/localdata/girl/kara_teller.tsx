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
      <p><b>Kara Teller</b> (the Vityaz Club, Moscow) is a very tender, feminine girl in daily life and a tough, brave,
        stubborn fighter on a wrestling mat and in a ring. She is specialized in karate, sambo, MMA and also in
        hand-to-hand combat named street fighting. Being 5'7" tall and weighing 121 lb, she is afraid of nobody and
        fights valiantly against opponents who are heavier and physically stronger than her. At the Namazon Club, she
        participated mainly in MMA fights.</p>
      <h4><u>Kara Teller in MMA fights</u></h4>
      <h4>Kara vs Elena Vasilyeva. Christmas Cup 2012</h4>
      <img className={sC.videosMainImg} src={imgMain2} alt="imgMain2"/>
      <p>
        This was a very intense fight with a lot of punches, kicks, throws and ground wrestling. There were 3
        four-minute rounds with 4 minute breaks between each round.<br/>
        First two rounds <NavLink to="/universe/girl/2012_2013/elena-vasileva2013">Elena</NavLink> (St. Petersburg, 5’6” / 132 lb) totally
        dominated throughout the first two rounds, giving Kara a very hard time.
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
      <p>In the third round it became clear that Elena was getting tired. Kara managed to get control of the fight, due
        to her combative spirit, and eventually she won by applying a choke hold.</p>
      <p>It was a very hard and dramatic fight, perhaps one of the best we’ve ever had at the Club.</p>
      <h4>Kara vs Svetlana Solovyova. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain3} alt="imgMain3"/>
      <p>
        Quite obviously, <b>Svetlana Solovyova</b> (St. Petersburg; 5’7” / 124 lb) was superior to Kara in physical
        power. For example, dynamometric measures of her hand grip strength were 56.3 kg (124 lb), which was more than
        her own weight! But on Kara’s side was her fighting experience that made up for the lack of her strength during
        their fight.<br/>
        In the beginning, when the girls were exchanging blows and kicks in stand up, Svetlana was still able to somehow
        withstand Kara’s attacks, but when the fight was brought to the ground, Kara’s advantage became more evident.
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
      <p>Kara won by a choke hold in 1:13.</p>
      <h4>Kara vs Darya Balina. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain4} alt="imgMain"/>
      <p>
        Kara was the favorite to win this fight against <NavLink to="/universe/girl/2012_2013/darya-balina">Darya Balina</NavLink> (the female
        self-defense Club "Panther", St. Petersburg, 5’4” / 124 lb). While Darya had pretty good kick-boxing skills, she
        didn’t feel so confident in wrestling (the consequent effect of her combat training with an emphasis on
        self-defense). The fight format was three four minute rounds with a rest period of one minute between them. But
        it took Kara only two rounds to gain a victory. The first round was fought in stand up. Kara was better with her
        striking. In the second round the fight came to the ground, where Kara again took advantage of Darya and
        finished her off with a choke (the way of finishing an opponent off that has already become Kara’s beloved
        tradition).
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
        The fight format was three four minute rounds with a rest period of one minute between them. But it took Kara
        only two rounds to gain a victory.<br/>
        The first round was fought in stand up. Kara was better with her striking. In the second round the fight came to
        the ground, where Kara again took advantage of Darya and finished her off with a choke (the way of finishing an
        opponent off that has already become Kara’s beloved tradition).
      </p>
      <h4><u>Kara Teller in Submission Grappling fights</u></h4>
      <h4>Kara vs Svetlana Solovyova. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain5} alt="imgMain"/>
      <p>
        The girls had two fights with each other. The first one was a short MMA fight that lasted a little more than a
        minute. After having finished it, they had decided to test their strengths in the second one. This time the
        rules were submission grappling on the ground, with a certain time limit set for the fight.
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
        As the opponents were in about the same weight class, their contest was interesting and intriguing. Svetlana
        (St. Petersburg, 5’7” / 124 lb) was physically more powerful and spent the majority of the fight on top of Kara,
        while Kara, being on her back, used a head scissors in the defense, struggling to get control of Svetlana’s arm
        from the bottom position, trying to apply a painful submission hold. However, the time went on and nobody seemed
        to be able to earn the victory. Svetlana showed an evident lack of wrestling skill, while Kara wasn’t strong
        enough to successfully counterattack. Eventually, the girls got tired, especially Svetlana, and the fight was
        stopped with no winner. It was a <b>draw</b>.
      </p>
      <h4><u>Results for 2012 MMA Tournaments </u></h4>
      <p>Win-loss-draw record – 4:3:0 (for July 1, 2012)</p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a> you can purchase full videos of Kara’s MMA
        fights held in the Namazon Club (Videos 9, 17, 18 and 20).
      </p>
    </>
  )
}

//todo: Fix, maybe images2 & images3 & etc. is duplications, possible to take it from videos.