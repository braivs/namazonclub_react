import {DirIrinaBeachgr, DirIrinaSubgr} from "./DirContexts"
import {useGallery} from "./hooks"

export const galleryConfigs: GalleryConfig[] = [
    { name: 'irinaSubgr', dir: DirIrinaSubgr, width: 320, height: 245 },
    { name: 'irinaBeachgr', dir: DirIrinaBeachgr, width: 330, height: 220 },
    // Добавьте другие галереи, если необходимо
]

export interface GalleryConfig {
    name: string;
    dir: any;  // todo: Замените 'any' на более конкретный тип, если он у вас есть, например string или ваш собственный тип данных
    width: number;
    height: number;
}


