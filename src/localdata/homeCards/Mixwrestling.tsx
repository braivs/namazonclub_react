import React from "react"
import mw from 'src/img/main/mw.jpg'

export function Mixwrestling() {
    return (
        <>
            <h3><a href="articles/mixEng.html">Mixed Wrestling (Mixwrestling)</a></h3>
            <img src={mw} alt=""/>
            <p>
                Our fighting club is attended by both girls and young men. For the girls it’s more comfortable to
                practice many
                of wrestling techniques on male partners (we are grateful to the men for their assistance!).
                Sporting mixed wrestling is also practiced with us. In this case, the competitors for the fights are
                selected
                based on their weight categories and physical strength.
            </p>
            <button type="button">Read more...</button>
        </>
    )
}