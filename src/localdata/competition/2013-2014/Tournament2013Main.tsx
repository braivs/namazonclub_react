import React, {useState} from "react"
import {PageSelector} from "./PageSelector/PageSelector"
import {Tournament2013_1} from "./Tournament2013_1"
import {Tournament2013_2} from "./Tournament2013_2"
import {Tournament2013_3} from "./Tournament2013_3"

export const Tournament2013Main = () => {
    const [pageValue, setPageValue] = useState(1)

    return (
        <>
            <h4>Women's Power Event Tournament. October, 2013</h4>
            <PageSelector activePage={pageValue} setActivePage={setPageValue}/>
            { pageValue === 1 && <Tournament2013_1/> }
            { pageValue === 2 && <Tournament2013_2/> }
            { pageValue === 3 && <Tournament2013_3/> }
        </>
    )
}