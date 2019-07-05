import React from 'react'
import PropTypes from 'prop-types'

function Keg(props){
  return (
    <div>
      <style jsx>{`
                div {
                  background-color: lightyellow;
                }
                h3 {
                  color: black;
                }
              `}</style>
      <h3>{props.brewery} | {props.name }</h3>
      <p><em>{props.pint} ${props.growler} {props.abv}</em></p>
      <hr/>
    </div>
  )
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pint: PropTypes.string,
  growler: PropTypes.string,
  abv: PropTypes.string
}

export default Keg
