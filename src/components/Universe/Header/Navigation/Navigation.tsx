import s from "./Navigation.module.scss"
import React from "react"
import {NavLink} from "react-router-dom"
import logo from 'src/img/logo.jpg'
import {Container, Dropdown, Navbar} from "react-bootstrap"
import {CustomToggle} from "../../../../common/DropdownCustom/DropdownCustom"

export function Navigation() {
    return (
        <Navbar expand="lg" className={s.navigation}>
            <Container>
                <Navbar.Brand><NavLink to="/"><img src={logo} alt=""/></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={s.togglerIcon}>
                    &#9776;
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="https://gumroad.com/namazonclub">SHOP</NavLink>
                        </li>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" as={CustomToggle}>
                                VIDEO
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item as={NavLink} to={"/videos/wrestling"}>Wrestling</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/videos/mma"}>MMA</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/videos/boxing"}>Kickboxing</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to={"/videos/mix"}>Mixed wrestling</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={NavLink} to={"/videos/all"}>All categories</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic2" as={CustomToggle}>
                                GIRLS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item as={NavLink} to="/girls/2010-2011">2010 - 2011</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/girls/2012-2013">2012 - 2013</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={NavLink} to="/girls/all">All girls</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic3" as={CustomToggle}>
                                COMPETITIONS
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark" className={s.dropdownMenuSuper}>
                                <Dropdown.Item as={NavLink} to="/competitions/2015-2017">2015 - 2017</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/competitions/2013-2014">2013 - 2014</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/competitions/2012">2012</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/competitions/2011">2011</Dropdown.Item>
                                <Dropdown.Item as={NavLink} to="/competitions/Archive">Archive</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as={NavLink} to="/competitions/all">All competitions</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <li className="nav-item">
                            <NavLink to="contactus">CONTACT US</NavLink>
                        </li>
                    </ul>
                {/*</div>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}