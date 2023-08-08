import React from 'react'
import Lightbox, {Callback, Slide} from "yet-another-react-lightbox"

export const LightboxMy = (props: PropsType) => {
    return (
        <Lightbox
            styles={{container: {backgroundColor: "rgba(0, 0, 0, .5)"}}}
            slides={props.slides}
            open={props.index >= 0}
            index={props.index}
            close={props.close}
        />
    )
}

type PropsType = {
    slides: Slide[]
    index: number
    close: Callback
}