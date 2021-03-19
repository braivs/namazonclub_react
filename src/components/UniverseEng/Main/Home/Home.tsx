import React from "react";
import {SumbissionGrappling} from "./ArticlesCards/SumbissionGrappling";
import {Mixwrestling} from "./ArticlesCards/Mixwrestling";
import {MMA} from "./ArticlesCards/MMA";
import {Maslenitsa2016} from "./ArticlesCards/Maslenitsa2016";
import s from "./Home.module.scss"

export function Home() {
  return (
    <div className={s.Home}>
      <div className={s.rowMy + " row"}>
        <SumbissionGrappling />
        <Mixwrestling />
      </div>
      <div className={s.rowMy + " row"}>
        <MMA />
        <Maslenitsa2016 />
      </div>
    </div>
  )
}