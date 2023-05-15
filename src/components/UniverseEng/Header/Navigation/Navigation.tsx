import s from "./Navigation.module.scss"
import React from "react"
import {NavLink} from "react-router-dom"
import logo from 'src/img/logo.jpg'
import {Container, Dropdown} from "react-bootstrap"
import {CustomToggle} from "../../../../common/DropdownCustom/DropdownCustom"

export function Navigation() {
    return (
        <nav className={s.navigation + " navbar navbar-expand-lg"}>
            <Container>
                <a className="navbar-brand" href="http://">
                    <img src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={s.togglerIcon}>&#9776;</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/universeeng/home">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop">SHOP</NavLink>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                                VIDEO
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item><NavLink to="/video/all">All categories</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/video/wrestling">Wrestling</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/video/mma">MMA</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/video/boxing">Kickboxing</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/video/mix">Mixed wrestling</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic2" as={CustomToggle}>
                                GIRLS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item><NavLink to="/girls/all">All girls</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/girls/2010-2011">2010 - 2011</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/girls/2012-2013">2012 - 2013</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic3" as={CustomToggle}>
                                COMPETITIONS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item><NavLink to="/competitions/all">All competitions</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/competitions/2015-2017">2015 - 2017</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/competitions/2013-2014">2013 - 2014</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/competitions/2012">2012</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/competitions/2011">2011</NavLink></Dropdown.Item>
                                <Dropdown.Item><NavLink to="/competitions/Archive">Archive</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <NavLink to="/contactus">CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>

        </nav>
    )
}