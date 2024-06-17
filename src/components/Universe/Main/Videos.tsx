import React from 'react'
import sC from 'src/common/styles.module.scss'
import {Cards} from "../../../common/Cards/Cards"
import {cardsBoxing, cardsMix, cardsMMA, cardsWrestling} from "../../../localdata/cardsVideo"
import {useParams} from "react-router-dom"

export const Videos = () => {
  const {cardsVariant} = useParams()

  return (
    <>
      <div className={sC.header}>
        <h3>Videos of the competitions and individual fights at the Namazon Club</h3>
        <h3>Subcategories</h3>
      </div>
      {(cardsVariant === 'all' || cardsVariant === 'wrestling') && <div>
          <p>Wrestling</p>
          <p>This subcategory includes only videos of woman-on-woman wrestling matches conducted according to the
              rules of Submission Grappling.</p>
          <Cards cardsArray={cardsWrestling} variant={'video'} />
      </div>}
      {(cardsVariant === 'all' || cardsVariant === 'mma') && <div>
          <p>MMA</p>
          <p>This subcategory exclusively features videos of female MMA fights, both in gyms and outdoors.</p>
          <Cards cardsArray={cardsMMA} variant={'video'} isReversed={true} />
      </div>}
      {(cardsVariant === 'all' || cardsVariant === 'boxing') && <div>
          <p>Kickboxing, Muay Thai</p>
          <p>This subcategory includes videos of female Muay Thai and Kickboxing fights, both in gyms and outdoors.</p>
          <Cards cardsArray={cardsBoxing} variant={'video'} />
      </div>}
      {(cardsVariant === 'all' || cardsVariant === 'mix') && <div>
          <p>Mixed Wrestling</p>
          <p>Namazon’s man-on-woman wrestling matches are highly competitive and follow the rules of Submission
              Grappling, with no time limit in any individual fight.</p>
          <Cards cardsArray={cardsMix} variant={'video'} isReversed={true} />
      </div>}
    </>
  )
}