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
      <h3>{props.name } - ${props.cost}</h3>
      <p><em>{props.type} | {props.brand}</em></p>
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
