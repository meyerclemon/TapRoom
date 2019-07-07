import React from 'react'
import PropTypes from 'prop-types'


function Keg(props){
  return (
    <div>
      
      <h4>{props.brewery} | {props.name } |<em> ${props.pint} / {props.growler} </em> | {props.abv}</h4>
      <hr/>
    </div>
  )
}

Keg.propTypes = {
  brewery: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pint: PropTypes.string,
  growler: PropTypes.string,
  origin: PropTypes.string,
  abv: PropTypes.string
}

export default Keg
