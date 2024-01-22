import React, {useEffect, useState} from 'react'
import {Button} from "react-bootstrap"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "./ModdedComponents/ModdedComponents"
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"

export const ButtonGallery = (props: ButtonPropsType) => {
  return (
    <>
      <Button variant="primary"
              onClick={() => props.openCloseCallback(!props.isOpen)}>{props.buttonName ? props.buttonName : 'SCREENSHOTS'}</Button>
      <Collapse in={props.isOpen}>
        <PhotoAlbumMy layout="masonry" photos={props.photos} openCallback={props.indexCallback}/>
      </Collapse>
      <LightboxMy slides={props.slides} index={props.index} closeCallback={props.indexCallback}/>
    </>
  )
}

export const MyYouTube = (props: YoutubePropsType) => {

  const [width, setWidth] = useState(window.innerWidth)
  const [frameWidth, setFrameWidth] = useState(640)
  const [frameHeight, setFrameHeight] = useState(360)

  useEffect(() => { // for adaptive
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }
    window.addEventListener("resize", updateWindowDimensions)
    if (width < 992) {
      setFrameWidth(480)
      setFrameHeight(270)
    } else if (width < 768) {
      setFrameWidth(340)
      setFrameHeight(190)
    } else {
      setFrameWidth(640)
      setFrameHeight(360)
    }
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [width])


  return <iframe
    width={frameWidth}
    height={frameHeight}
    src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
}

type ButtonPropsType = {
  openCloseCallback: (value: boolean) => void
  indexCallback: (value: number) => void
  index: number
  isOpen: boolean
  photos: Photo[]
  slides: Slide[]
  buttonName?: string
}

type YoutubePropsType = {
  videoId: string
}