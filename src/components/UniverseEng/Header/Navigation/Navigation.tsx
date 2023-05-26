import s from "./Navigation.module.scss"
import React from "react"
import {NavLink} from "react-router-dom"
import logo from 'src/img/logo.jpg'
import {Container, Dropdown, Navbar} from "react-bootstrap"
import {CustomToggle} from "../../../../common/DropdownCustom/DropdownCustom"

export function Navigation() {
    return (
        <nav className={s.navigation + " navbar navbar-expand-lg"}>
            <Container>
                <Navbar.Brand><NavLink to="/universeeng/home"><img src={logo} alt=""/></NavLink></Navbar.Brand>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={s.togglerIcon}>&#9776;</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="home">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/universeeng/shop">SHOP</NavLink>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                                VIDEO
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item as={NavLink} to={"/universeeng/video/wrestling"}>Wrestling</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/universeeng/video/mma"}>MMA</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/universeeng/video/boxing"}>Kickboxing</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/universeeng/video/mix"}>Mixed wrestling</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={NavLink} to={"/universeeng/video/mix"}>All categories</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic2" as={CustomToggle}>
                                GIRLS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item as={NavLink} to="/universeeng/girls/2010-2011">2010 - 2011</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/universeeng/girls/2012-2013">2012 - 2013</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={NavLink} to="/universeeng/girls/all">All girls</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic3" as={CustomToggle}>
                                COMPETITIONS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item as={NavLink} to="/universeeng/competitions/2015-2017">2015 - 2017</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/universeeng/competitions/2013-2014">2013 - 2014</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/universeeng/competitions/2012">2012</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/universeeng/competitions/2011">2011</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/universeeng/competitions/Archive">Archive</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={NavLink} to="/universeeng/competitions/all">All competitions</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <NavLink to="contactus">CONTACT US</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>

        </nav>
    )
}