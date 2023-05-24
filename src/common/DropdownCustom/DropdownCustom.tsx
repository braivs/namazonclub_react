import React from 'react'
import s from './DropdownCustom.module.scss'

export const CustomToggle = React.forwardRef(
    (props: CustomToggleProps, ref: React.Ref<HTMLAnchorElement>) => (
        <div className={s.customToggle}>
            <a
                href="/a"
                ref={ref}
                onClick={e => {
                    e.preventDefault();
                    props.onClick(e);
                }}
            >
                {props.children}
                <span style={{ paddingLeft: "2px" }}>&#9662;</span>
            </a>
        </div>

    )
);

type CustomToggleProps = {
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {};
};