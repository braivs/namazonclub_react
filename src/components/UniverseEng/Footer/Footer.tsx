import React from "react"
import s from "./Footer.module.scss"
import socialFacebook from 'src/img/socialFacebook.png'
import socialVK from 'src/img/socialVk.png'
import socialTelegramColor from 'src/img/socialTelegramColor.png'

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.socialBox}>
                <a href="https://www.facebook.com/groups/namazonclub"><img src={socialFacebook} alt=""/></a>
                <a href="https://vk.com/namazon"><img src={socialVK} alt=""/></a>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <p>©2021 Club of single combats for women "Namazon" | Designed by Hurricane Media</p>
                    <p className={s.socialMy}><span>Site created by BriWS</span><span><a
                        href="https://t.me/brightwithsme"><img
                        src={socialTelegramColor} alt=""/></a></span><span>2023</span></p>
                </div>
            </div>
        </footer>
    )
}