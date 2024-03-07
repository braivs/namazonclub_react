import { useState, useEffect } from 'react';
import {getGalleryPhotosFromRequire, getSlides} from "./helpers"

// todo: add type
export function useGallery(images: any) {
    const [index, setIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const photos = getGalleryPhotosFromRequire(images);
    const slides = getSlides(photos);

    return { index, setIndex, open, setOpen, photos, slides };
}

