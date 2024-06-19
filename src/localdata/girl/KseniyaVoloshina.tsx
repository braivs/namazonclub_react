import imgMain from "../../img/girl/kseniya-voloshina/kseniya.jpg"
import {MainImg} from "../../common/MainImg"
import React from "react"
import {useGallery} from "../../common/hooks"
import {DirKseniyaVoloshinaSubgr} from "../../common/ImageContexts"
import {CustomButtonGallery} from "../../common/common"
import {NavLink} from "react-router-dom"
import {Table} from "react-bootstrap"

export const KseniyaVoloshina = () => {
  const gallery1 = useGallery(DirKseniyaVoloshinaSubgr)

  return (
    <>
      <h4>Ksenia Voloshina</h4>
      <MainImg imgMain={imgMain}/>
      <p>
        <b>Ksenia Voloshina</b> (5'3" / 141 lb) - a participant in the club's tournaments on Submission Grappling.<br/>
        She is a prize winner of the "Christmas Cup 2011" tournament in Submission Grappling.
      </p>
      <CustomButtonGallery gallery={gallery1} buttonName="Submission grappling"/>
      <h4><u>Results of Fights</u></h4>
      <Table bordered>
        <tr>
          <th>Ksenia Voloshina vs. Natalia Mysik</th>
          <th>Ksenia Voloshina vs. Valentina Perfilyeva</th>
        </tr>
        <tr>
          <td><NavLink to="/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission
            Grappling</NavLink></td>
          <td><NavLink to="/video/4">VIDEO 4. "Christmas Cup 2011". Tournament on Submission
            Grappling</NavLink></td>
        </tr>
      </Table>
    </>

  )
}