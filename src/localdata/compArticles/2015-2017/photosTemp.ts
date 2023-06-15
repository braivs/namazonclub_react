import img1 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/1.jpg'
import img2 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/2.jpg'
import img3 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/3.jpg'
import img4 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/4.jpg'
import img5 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/5.jpg'
import img6 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/6.jpg'
import img7 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/7.jpg'
import img8 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/8.jpg'
import img9 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/9.jpg'
import img10 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/10.jpg'
import img11 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/11.jpg'
import img12 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/12.jpg'
import img13 from 'src/img/competitions/2016/Shrove_Tuesday/armwrestling/13.jpg'

const photos0 = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
]

export const photos = photos0.map(e => {
    return {
        src: e,
        original: e,
        width: 320,
        height: 212
    }
})

