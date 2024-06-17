import React from 'react'
import {Col, Row} from "react-bootstrap"
import mw from 'src/img/main/mw.jpg'

export const Mix = () => {
  return (
    <>
      <Row>
        <Col>
          <h3>Mixed Wrestling (Mixwrestling)</h3>
        </Col>
      </Row>
      <Row>
        <Col xl={2}><img src={mw} alt=""/></Col>
        <Col xl={10}>
          <p>
            Our fighting club is attended by both girls and young men. For the girls, it’s more comfortable to practice
            many wrestling techniques with male partners (we are grateful to the men for their assistance!). Sporting
            mixed wrestling is also practiced with us. In this case, the competitors for the fights are selected based
            on their weight categories and physical strength.
          </p>
          <p>
            Some of our mixed matches are fought very hard and characterized by a high technical level. In contrast to
            traditional battles in the style of MIXWRESTLING, the results of our sporting mixed fights (COMPETITIVE
            MIXED WRESTLING) are never known in advance, as it should be in sport fighting competitions.
          </p>
        </Col>
      </Row>

    </>
  )
}