import {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "./helpers"
import {useLocation} from "react-router-dom"

export function useGallery(images: __WebpackModuleApi.RequireContext, imagesSize?: imagesSizeType ) {
    const [index, setIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const photos = imagesSize
        ? getGalleryPhotosFromRequire(images, imagesSize.width, imagesSize.height)
        : getGalleryPhotosFromRequire(images);
    const slides = getSlides(photos);

    return { index, setIndex, open, setOpen, photos, slides };
}

type imagesSizeType = {
    width: number
    height: number
}

export const useExtractVideoID = () => {
    const location = useLocation();

    const extractValueUsingRegex = (url: string) => {
        const match = url.match(/\/video\/(.*)/);
        return match ? match[1].toUpperCase() : null;
    };

    return extractValueUsingRegex(location.pathname);
};

