// Провайдер контекста
import {createContext, ReactNode, useEffect, useState} from "react"
import React from 'react'
import {GalleryConfig, galleryConfigs} from "./galleryConfigs"
import {useGallery} from "./hooks"

const GalleryDataContext = createContext(null)


function useGalleryData(configs: GalleryConfig[]): any { // todo: Используйте здесь более конкретный возвращаемый тип вместо 'any', если возможно
    const [galleriesData, setGalleriesData] = useState<{ [key: string]: any } | null>(null); // Укажите более конкретный тип вместо any

    useEffect(() => {
        const data: { [key: string]: any } = {}; // Используйте здесь более конкретный тип вместо any
        configs.forEach(config => {
            // Теперь это сделано внутри useEffect, следуя правилам хуков
            const galleryData = useGallery(config.dir, {width: config.width, height: config.height});
            data[config.name] = {
                index: galleryData.index,
                setIndex: galleryData.setIndex,
                open: galleryData.open,
                setOpen: galleryData.setOpen,
                photos: galleryData.photos,
                slides: galleryData.slides
            };
        });
        setGalleriesData(data);
    }, [configs]); // Добавьте все внешние зависимости в массив зависимостей

    return galleriesData;
}

export const GalleryDataProvider: React.FC<GalleryDataProvider> = ({children}) => {
    const galleriesData = useGalleryData(galleryConfigs); // Использование пользовательского хука

    return (
        <GalleryDataContext.Provider value={galleriesData}>
            {children}
        </GalleryDataContext.Provider>
    );
}

interface GalleryDataProvider {
    children: ReactNode;
}