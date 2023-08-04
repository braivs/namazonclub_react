import {Image} from "react-grid-gallery"

export type CardType = {
    id: number | string
    title: string
    imgRef: string
}

export type VariantType = 'videos' | 'girls' | 'competitions'

export interface CustomImage extends Image {
    original: string;
}