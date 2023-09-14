import React, {useState} from 'react'
import imgMain from 'src/img/girl/tais2013/main.jpg'
import imgMain2 from 'src/img/girl/tais2013/mma-rozhdestvenskij-kubok-2012-4/01.jpg'
import imgMain3 from 'src/img/girl/tais2013/mma-kara-svetlany-2012-2/01.jpg'
import imgMain4 from 'src/img/girl/tais2013/tais-varvara.jpg'
import imgMain5 from 'src/img/girl/tais2013/2013-sg-elena-vasilyeva-tais.jpg'
import sC from "../../common/styles.module.scss"
import {getGalleryPhotosFromRequire, getSlides} from "../../common/helpers"
import {ButtonGallery} from "../../common/common"

const images = require.context('src/img/girl/tais2013/main_gallery', false)
const images2 = require.context('src/img/girl/tais2013/mma-rozhdestvenskij-kubok-2012-4', false)
const images3 = require.context('src/img/girl/tais2013/mma-kara-svetlany-2012-2', false)

export const Tais2013 = () => {
  const [index, setIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  const photos = getGalleryPhotosFromRequire(images, 330, 220)
  const slides = getSlides(photos)

  const [index2, setIndex2] = useState(-1)
  const [open2, setOpen2] = useState(false)
  const photos2 = getGalleryPhotosFromRequire(images2)
  const slides2 = getSlides(photos2)

  const [index3, setIndex3] = useState(-1)
  const [open3, setOpen3] = useState(false)
  const photos3 = getGalleryPhotosFromRequire(images3)
  const slides3 = getSlides(photos3)

  const buttonText = 'Other photos'

  return (
    <>
      <h4>Tais</h4>
      <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
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
        <b>Tais</b> (5’7” / 130 lb) is a skilled and strong woman who is specialized in various combative sports. She
        competes successfully in Submission Grappling and MMA competitions. She has a beautiful, flexible body and a
        character of a dominant fighter. But, as a woman in daily life out of gym, Tais is warm, open and approachable.
        She's a very pleasant and comfortable person to be with. If you’ve ever met her you would never think that this
        charming, lovely lady could be a formidable opponent for you on a mat. You’d hardly believe, looking at her,
        that she’d be able to beat you up without getting in trouble, or pin you down helplessly, or squeeze you
        senseless between her beautiful, powerful thighs. However, she’s really very good in doing all these things!
      </p>
      <h4><u>Tais in MMA fights</u></h4>
      <h4>Tais vs Elena Vasilyeva. Christmas Cup 2012</h4>
      <img className={sC.videosMainImg} src={imgMain2} alt="imgMain"/>
      <p>
        The fight was scheduled for 3 four-minute rounds with a one-minute rest period between each round. As it
        happened, though, it didn’t take the fighters long to determine a winner. Tais defeated a
        href="elena-vasileva2013Eng.html" Lena a !FIX LINK! (5'6" / 132 lb) already in the first round.
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
      <p>After having mounted her opponent, Tais could freely deliver punches to Kara’s head from the top position, but
        she chose to make her submit with an arm lock.</p>
      <h4>Tais vs Kara Teller. 2012</h4>
      <img className={sC.videosMainImg} src={imgMain3} alt="imgMain"/>
      <p>
        During 2012 Tais has had three fights with a href="kara-tellerEng.html" Kara Teller a !Fix link! (5'7" / 119 lb). Two of
        them Tais won with the victory by fall. In the third fight she was disqualified for arguing with the referee,
        and Kara was declared a winner.<br/>
        The photo album below shows some pics of the second fight between Tais and Kara. In that fight Tais destroyed
        her opponent already in round 1.
      </p>
      <ButtonGallery
        index={index3}
        indexCallback={setIndex3}
        isOpen={open3}
        openCloseCallback={setOpen3}
        photos={photos3}
        slides={slides3}
        buttonName={buttonText}
      />
      <p>Note that unlike in their first match, Kara managed to offer good resistance, and even counterattack a couple
        of times, fighting furiously, but the fight was too difficult and the chances were not in her favor at all.</p>
      <h4><u>Tais in Submission Grappling fights</u></h4>
      <p>
        Tais has won all the submission grappling tournaments organized by the Namazon Club in 2008–2011. As a wrestler
        she was second to none, both on a mat and on sand beaches.<br/>
        Besides, Tais won many individual wrestling fights against particularly strong opponents. For example, she
        defeated such well-known Ukrainian bodybuilders as <b>Irina Dergacheva</b> (Izida) and <b>Anna Mihailenko</b>,
        bringing them to submission, and she more than once beat <b>Alesya Veresova</b> who had been a multiple champion
        of Byelorussia in arm wrestling and is recently a freestyle wrestling coach.
      </p>
      <p>In <b>2012</b>, in a competitive submission fight, Tais overpowered <b>Varvara Akulova</b> (5'9" / 165 lb) who
        during her early years had been twice recognized by the Guinness Book of Records as the strongest girl in the
        world, and who at the present day is a master of sports in weightlifting and powerlifting.</p>
      <img className={sC.videosMainImg} src={imgMain4} alt="imgMain4"/>
      <h4><b>Tais</b> vs <b>Varvara Akulova</b></h4>
      <p>
        In <b>June 2013</b>, Tais again met her old rival, a href="elena-vasileva2013Eng.html" Elena
        Vasilyeva a !Fix link! (5'7" / 157 lb), who had been away from Namazon Club for nearly two years, and during that time
        had gained weight and strength and had greatly improved her wrestling ability.<br/>
        It was a hard fought and fairly even match, with submissions coming from both sides. And after more than 20
        minutes of struggling, Lena finally defeated her more experienced opponent. Thus, Tais lost the wrestling match
        for the first time versus Elena.
      </p>
      <img className={sC.videosMainImg} src={imgMain5} alt="imgMain5"/>
      <h4><b>Tais</b> vs <b>Elena Vasilyeva</b></h4>
      <p>in progress...</p>
      <p>Win-loss-draw record – 3:1:0 (for May 8, 2012)</p>
      <hr/>
      <p>
        In our store on <a href="https://gumroad.com/namazonclub">Gumroad</a> you can purchase full videos of Tais’s
        fights 2012-2013 – MМА fights (Videos 9, 17 and 18), submission grappling fights (Videos 19, 29, 33 and 35) and
        mixed wrestling fights (Videos 28, 30, 31-1, 31-2, 32 and 34).
      </p>
    </>
  )
}

//todo: Fix, maybe images2 & images3 is duplications, possible to take it from videos.
//todo: fix links