import {useParams} from "react-router-dom"
import sC from 'src/common/styles.module.scss'
import {yearsConverter} from "../../../common/helpers"
import {Routes} from "react-router-dom"

export const Competition = () => {
    const {years} = useParams()

    return (
        <div className={sC.compArticlesVideoGirl}>
           <h3>{yearsConverter(years)}</h3>
            <Routes>
            </Routes>
        </div>
    )
}