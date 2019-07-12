import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'
export default NewKeg

function NewKeg(props) {
  return (
    <div>
      <hr />
      {props.newKeg.map(keg => (
        <Keg
          brewery={keg.brewery}
          name={keg.name}
          pint={keg.pint}
          growler={keg.growler}
          origin={keg.origin}
          abv={keg.abv}
          key={keg.id}
        />
      ))}
    </div>
  )
}
NewKeg.propTypes = {
  newKeg: PropTypes.array
}
