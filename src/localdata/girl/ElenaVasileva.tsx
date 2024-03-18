import {MainVideoImg} from "../../common/MainVideoImg"
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
            <h4>ELENA VASILYEVA</h4>
            <MainVideoImg imgMain={imgMain}/>
            <p>
                <b>Elena Vasilyeva</b> ( 5'6" / 135 lb ) - new young club star.<br/>
                Specialization - SUBMISSION GRAPPLING, MMA, JUDO and ARM WRESTLING (candidate for the master of sports).
            </p>
            <CustomButtonGallery gallery={gallery1} buttonName="SUBMISSION GRAPPLING"/>
            <CustomButtonGallery gallery={gallery2} buttonName="ММА"/>
            <h4><u>Results of fights</u></h4>
            <Table bordered>
                <tr>
                    <th>Elena Vasilyeva vs Tais</th>
                    <th>Elena Vasilyeva vs Vlasta</th>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/8">VIDEO 8. Submission Grappling. Beach Tournament. June,
                        2011</NavLink></td>
                    <td><NavLink to="/universe/video/8">VIDEO 8. Submission Grappling. Beach Tournament. June,
                        2011</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to="/universe/video/16">VIDEO 16. Youth vs Experience. Submission grappling. June, 2011</NavLink></td>
                    <td></td>
                </tr>
            </Table>
        </>
    )
}