import {MainImg} from "../../common/MainImg"
import imgMain from "../../img/girl/elena-vasileva/elena.jpg"
import React from "react"
import {CustomButtonGallery} from "../../common/common"
import {useGallery} from "../../common/hooks"
import {DirElenaVasilevaMma, DirElenaVasilevaSubgr} from "../../common/ImageContexts"
import {Table} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export const ElenaVasileva = () => {
    const gallery1 = useGallery(DirElenaVasilevaMma)
    const gallery2 = useGallery(DirElenaVasilevaSubgr)

    return (
      <>
        <h4>Elena Vasilyeva</h4>
        <MainImg imgMain={imgMain}/>
        <p>
          <b>Elena Vasilyeva</b> (5'6" / 135 lb) - a rising star in the club.<br/>
          Specializes in Submission grappling, MMA, Judo, and Arm wrestling (candidate for the Master of Sports).
        </p>
        <CustomButtonGallery gallery={gallery1} buttonName="Submission grappling"/>
        <CustomButtonGallery gallery={gallery2} buttonName="MMA"/>
        <h4><u>Results of Fights</u></h4>
        <Table bordered>
          <tr>
            <th>Elena Vasilyeva vs. Tais</th>
            <th>Elena Vasilyeva vs. Vlasta</th>
          </tr>
          <tr>
            <td><NavLink to="/video/8">VIDEO 8. Submission Grappling. Beach Tournament. June, 2011</NavLink></td>
            <td><NavLink to="/video/8">VIDEO 8. Submission Grappling. Beach Tournament. June, 2011</NavLink></td>
          </tr>
          <tr>
            <td><NavLink to="/video/16">VIDEO 16. Youth vs Experience. Submission grappling. June, 2011</NavLink></td>
            <td></td>
          </tr>
        </Table>
      </>

    )
}