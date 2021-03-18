import {Logo} from "./Logo/Logo";
import React from "react";
import {Navigation} from "./Navigation/Navigation";

export function Header() {
  return (
    <header>
      <Logo/>
      <Navigation />

      {/*<NavigationRBS />*/}
    </header>
  )
}