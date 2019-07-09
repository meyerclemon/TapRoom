import React from 'react'
import PropTypes from 'prop-types'

function NewKegForm(props){
  let _brewery = null
  let _name = null
  let _pint = null
  let _growler = null
  let _origin = null
  let _abv = null

  function handleNewKegFormSubmission(event) {
    event.preventDefault()
    props.onNewKegCreation({brewery: _brewery.value, name: _name.value, pint: _pint.value, growler: _growler.value, origin: _origin.value, abv: _abv.value})

    _brewery.value = ''
    _name.value = ''
    _pint.value = ''
    _growler.value = ''
    _origin.value = ''
    _abv.value = ''
  }
  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery name'/>
        <input
          type='text'
          id='name'
          placeholder='Item name'/>
        <input
          type='text'
          id='pint'
          placeholder='Price per pint'/>
        <input
          type='text'
          id='growler'
          placeholder='Price per growler'/>
        <input
          type='text'
          id='origin'
          placeholder='Place of origin (initials)'/>
        <input
          type='text'
          id='abv'
          placeholder='Alcohol By Volume'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}


export default NewKegForm