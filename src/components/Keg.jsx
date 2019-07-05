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
      <h3>{props.type} | {props.name }</h3>
      <p><em>{props.brand} ${props.cost} {props.pint}</em></p>
      <hr/>
    </div>
  )
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  cost: PropTypes.string
}

export default Keg
