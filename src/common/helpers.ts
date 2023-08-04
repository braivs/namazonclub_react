// this returns array of photos for react-grid-gallery
export const getGalleryPhotoes = (requreData: __WebpackModuleApi.RequireContext) => {
    const images: Array<string> = requreData.keys().map(image => requreData(image));
    return images.map(e => {
        return {
            src: e,
            original: e,
            width: 270,
            height: 152
        }
    })
}