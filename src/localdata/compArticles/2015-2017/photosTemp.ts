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
import {Image} from "react-grid-gallery"

export const photos = [
    {
        src: img1,
        original: img1,
        width: 320,
        height: 212,
    },
    {
        src: img2,
        original: img2,
        width: 320,
        height: 212,
    },
    {
        src: img3,
        original: img3,
        width: 320,
        height: 212,
    },
    {
        src: img4,
        original: img4,
        width: 320,
        height: 212,
    },
    {
        src: img5,
        original: img5,
        width: 320,
        height: 212,
    },
    {
        src: img6,
        original: img6,
        width: 320,
        height: 212,
    },
    {
        src: img7,
        original: img7,
        width: 320,
        height: 212,
    },
    {
        src: img8,
        original: img8,
        width: 320,
        height: 212,
    },
    {
        src: img9,
        original: img9,
        width: 320,
        height: 212,
    },
    {
        src: img10,
        original: img10,
        width: 320,
        height: 212,
    },
    {
        src: img11,
        original: img11,
        width: 320,
        height: 212,
    },
    {
        src: img12,
        original: img12,
        width: 320,
        height: 212,
    },
    {
        src: img13,
        original: img13,
        width: 320,
        height: 212,
    },
]

export interface CustomImage extends Image {
    original: string;
}