// this returns array of photos for react-grid-gallery
import {Photo} from "react-photo-album"
import {GalleryConfig} from "./galleryConfigs"
import {useGallery} from "./hooks"

export const getGalleryPhotosFromRequire = (requreData: __WebpackModuleApi.RequireContext, width: number = 270, height: number = 152) => {
    const images: Array<string> = requreData.keys().map(image => requreData(image));
    return images.map(e => {
        return {
            src: e,
            width,
            height
        }
    })
}

export const getGalleryPhotosFromRequireFromArray = (photos: Array<string>) => {
    return photos.map(e => {
        return {
            src: e,
            width: 270,
            height: 152
        }
    })
}

export const getSlides = (photos: Photo[]) => photos.map(({src}) => ({src}))

