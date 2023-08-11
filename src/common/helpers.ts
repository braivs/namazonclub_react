// this returns array of photos for react-grid-gallery
export const getGalleryPhotosFromRequire = (requreData: __WebpackModuleApi.RequireContext) => {
    const images: Array<string> = requreData.keys().map(image => requreData(image));
    return images.map(e => {
        return {
            src: e,
            width: 270,
            height: 152
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