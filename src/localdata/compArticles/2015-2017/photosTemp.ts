const images = require.context('../../../img/competitions/2016/Shrove_Tuesday/armwrestling/', false)

const imageList = images.keys().map(image => images(image));

export const photosForGallery = imageList.map(e => {
    return {
        src: e,
        original: e,
        width: 320,
        height: 212
    }
})

