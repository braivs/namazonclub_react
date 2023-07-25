// this returns array of photos for react-grid-gallery
export const getGalleryPhotoes = (path: string) => {
    const path1 = 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/'
    const images = require.context(path1, false)

    const imageList = images.keys().map(image => images(image));

    return imageList.map(e => {
        return {
            src: e,
            original: e,
            width: 320,
            height: 212
        }
    })
}