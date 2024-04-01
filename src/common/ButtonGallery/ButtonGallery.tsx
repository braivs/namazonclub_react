import {Button} from "react-bootstrap"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../ModdedComponents/ModdedComponents"
import React from "react"
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"

type ButtonPropsType = {
    openCloseCallback: (value: boolean) => void
    indexCallback: (value: number) => void
    index: number
    isOpen: boolean
    photos: Photo[]
    slides: Slide[]
    buttonName?: string
}

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