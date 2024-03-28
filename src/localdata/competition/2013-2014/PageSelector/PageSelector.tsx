import React from "react"
import s from './PageSelector.module.scss'
import cn from 'classnames'

export const PageSelector: React.FC<PageSelector> = ({ activePage, setActivePage }) => {
    return (
        <ul>
            {[1, 2, 3].map((pageNumber) => (
                <li
                    key={pageNumber}
                    onClick={() => setActivePage(pageNumber)}
                    className={cn(s.pageSelector, activePage === pageNumber && s.active)}
                >
                    page {pageNumber}
                </li>
            ))}
        </ul>
    );
};

type PageSelector = {
    activePage: number
    setActivePage: (page: number) => void
}