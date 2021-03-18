import {Logo} from "./Logo/Logo";
import React from "react";
// import {Navigation} from "./Navigation/Navigation";
import {NavigationBS} from "./Navigation/NavigationBS";

export function Header() {
  return (
    <header>
      <Logo/>
      {/*<Navigation />*/}

      <NavigationBS />
    </header>
  )
}