import React from "react";
import s from "./ContacutUs.module.scss";

export function ContactUs() {
  return (
    <div className={s.contactUs + " row"}>
      <div className="col">
        <h2>Contact Us </h2>
        <p>Email: <a href='mailto:namazonclub@gmail.com'>namazonclub@gmail.com</a></p>
        <p>Facebook: <a
          href='https://www.facebook.com/groups/namazonclub'>https://www.facebook.com/groups/namazonclub</a></p>
        <p>VK: <a href='https://vk.com/namazon'>https://vk.com/namazon</a></p>
      </div>
    </div>
  )
}