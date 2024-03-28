import React from "react"
import s from './PageSelector.module.scss'
import cn from 'classnames'

export const PageSelector: React.FC<PageSelector> = ({activePage, setActivePage, mode}) => {

    const blockPrev = activePage === 1
    const blockNext = activePage === 3

    const specialActiveSelectorPrev = () => {
        if (blockPrev) {
            return s.active
        }
    }

    const specialActiveSelectorNext = () => {
        if (blockNext) {
            return s.active
        }
    }

    const onPrevClick = () => {
        if (blockPrev) return
        setActivePage(activePage - 1)
    }

    const onNextClick = () => {
        if (blockNext) return
        setActivePage(activePage + 1)
    }


    return (
        <ul>
            {
                mode !== 'prevNext'
                    ? <>
                        {
                            [1, 2, 3].map((pageNumber) => (
                                <li
                                    key={pageNumber}
                                    onClick={() => setActivePage(pageNumber)}
                                    className={cn(s.pageSelector, activePage === pageNumber && s.active)}
                                >
                                    page {pageNumber}
                                </li>
                            ))}

                    </>
                    : <>
                        <li onClick={() => onPrevClick()} className={cn(s.pageSelector, specialActiveSelectorPrev())}>Prev</li>
                        <li onClick={() => onNextClick()} className={cn(s.pageSelector, specialActiveSelectorNext())}>Next</li>
                    </>

            }
        </ul>
    )
}

type PageSelector = {
    activePage: number
    setActivePage: (page: number) => void
    mode?: 'standard' | 'prevNext'
}