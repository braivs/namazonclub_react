import sC from "../../common/styles.module.scss"
import imgMain from 'src/img/girl/valentina_perfileva/valentina.jpg'
import React from "react"
import {Col, Table} from "react-bootstrap"
import cn from "classnames"
import {useGallery} from "../../common/hooks"
import {DirValentinaKick, DirValentinaSubgr} from "../../common/ImageContexts"
import {NavLink} from "react-router-dom"
import {ButtonGallery} from "../../common/ButtonGallery/ButtonGallery"

export const ValentinaPerfileva = () => {
  const gallery1 = useGallery(DirValentinaSubgr)
  const gallery2 = useGallery(DirValentinaKick)

  return (
    <>
      <h4>Valentina Perfilyeva</h4>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <img className={sC.videosMainImg} src={imgMain} alt="imgMain"/>
      </Col>
      <p>
        <b>Valentina Perfilyeva</b> (5'8" / 132 lb) - participant in tournaments of the "Namazon" club in Submission
        Grappling,
        winner of the Olympic Games of martial arts "EAST-WEST" in karate (kumite).
      </p>
      <ButtonGallery
        index={gallery1.index}
        indexCallback={gallery1.setIndex}
        isOpen={gallery1.open}
        openCloseCallback={gallery1.setOpen}
        photos={gallery1.photos}
        slides={gallery1.slides}
        buttonName={'Submission Grappling'}
      />
      <ButtonGallery
        index={gallery2.index}
        indexCallback={gallery2.setIndex}
        isOpen={gallery2.open}
        openCloseCallback={gallery2.setOpen}
        photos={gallery2.photos}
        slides={gallery2.slides}
        buttonName={'Kickboxing'}
      />
      <h4><u>Results of Fights</u></h4>
      <Table bordered>
        <tr>
          <th>Valentina Perfilyeva vs Maria Rylyova</th>
          <th>Valentina Perfilyeva vs Natalia Mysik</th>
        </tr>
        <tr>
          <td><NavLink to="/video/12">VIDEO 12. Submission grappling. Tournament. April, 2010</NavLink></td>
          <td><NavLink to="/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission
            Grappling</NavLink></td>
        </tr>
        <tr>
          <td></td>
          <td><NavLink to="/video/12">VIDEO 12. Submission grappling. Tournament. April, 2010</NavLink></td>
        </tr>
      </Table>
      <Table bordered>
        <tr>
          <th>Valentina Perfilyeva vs Ksenia Voloshina</th>
          <th>Valentina Perfilyeva vs Nadezhda Akhmerova</th>
        </tr>
        <tr>
          <td><NavLink to="/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission
            Grappling</NavLink></td>
          <td><NavLink to="/video/13">VIDEO 13. Kickboxing. Nadezhda Akhmerova vs Valentina Perfilyeva.
            2011</NavLink></td>
        </tr>
      </Table>
    </>

  )
}