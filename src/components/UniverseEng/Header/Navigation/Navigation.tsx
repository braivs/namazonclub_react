import s from "./Navigation.module.scss"
import React from "react"
import {NavLink} from "react-router-dom"
import logo from 'src/img/logo.jpg'
import {Container, Dropdown} from "react-bootstrap"
import {CustomToggle} from "./DropdownCustom"

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
                            <a className="nav-link" href="https://gumroad.com/namazonclub">SHOP</a>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                                VIDEO
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item href="#/action-1">All categories</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Wrestling</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">MMA</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Kickboxing, Myay Thai</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic2" as={CustomToggle}>
                                GIRLS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item href="#/action-1">All girls</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2010 - 2011</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2012 - 2013</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic3" as={CustomToggle}>
                                COMPETITIONS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item href="#/action-1">All competitions</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2015 - 2017</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2013 - 2014</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2012</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">2011</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Archive</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <NavLink to="/universeeng/contactus">CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>

        </nav>
    )
}