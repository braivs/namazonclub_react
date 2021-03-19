import React from "react";
import s from "./Footer.module.scss"

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.socialBox}>
        <a href="https://vk.com/namazon"><img src="img/socialVk.png" alt=""/>
        </a><a href="https://www.facebook.com/groups/namazonclub"><img src="img/socialFacebook.png" alt=""/></a>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p>©2021 Club of single combats for women "Namazon"</p>
          <p className={s.socialMy}><span>Site created by BriWS</span><span><a href="https://t.me/brightwiths"><img
            src="img/social-telegram-color.png" alt=""/></a></span><span>2020</span></p>
        </div>
      </div>
    </footer>
  )
}