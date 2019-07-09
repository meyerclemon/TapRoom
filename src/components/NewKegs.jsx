import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function AddKegs(props) {
  return (    
    <div>
      <hr/>
      {props.addKegs.map((keg) =>
        <Keg brewery={keg.brewery}
          name={keg.name}
          pint={keg.pint}
          growler={keg.growler}
          origin={keg.origin}
          abv={keg.abv}
          key={keg.id}/>
      )}
    </div>
  )
}
AddKegs.propTypes = {
  addKegs: PropTypes.array
}